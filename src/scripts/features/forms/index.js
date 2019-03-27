import React from "react";
import { Field, Form, withFormik } from "formik";
import PropTypes from "prop-types";

// styled
import StyledForms from "./Forms.css";

const getInitialValues = passedFields => {
  let initialItems = {};
  Object.keys(passedFields).forEach(item => {
    return (initialItems[item] = "");
  });
  return initialItems;
};

const fieldId = field => `field-${field}`;

const setFormName = name => `form-${name}`;

const Forms = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <StyledForms>
      <Form id={setFormName(props.formName)} onSubmit={props.handleSubmit}>
        <React.Fragment>
          {values &&
            Object.keys(values).map((field, index) => {
              switch (props.fields[field].type) {
                case "select":
                  return (
                    <div key={index} className="form-item">
                      <div className="wrapper-label">
                        <label htmlFor={fieldId(field)}>
                          {field}
                          <sup
                            className={
                              props.fields[field].isRequired ? "required" : ""
                            }
                          >
                            *
                          </sup>
                        </label>
                        {errors[field] && touched[field] ? (
                          <span className="message">{errors[field]}</span>
                        ) : null}
                      </div>
                      <select
                        type={field.type}
                        name={field}
                        id={fieldId(field)}
                        className={
                          errors[field] && touched[field] ? "error" : ""
                        }
                        onChange={handleChange}
                      >
                        <option>Please select company</option>

                        {Object.keys(props.fields[field].options).map(
                          (option, index) => {
                            return (
                              <option
                                value={[option]}
                                key={index}
                                onClick={setFieldValue}
                              >
                                {
                                  props.fields[field].options[option].details
                                    .name
                                }
                              </option>
                            );
                          }
                        )}
                      </select>
                    </div>
                  );
                default:
                  return (
                    <div key={index} className="form-item">
                      <div className="wrapper-label">
                        <label htmlFor={fieldId(field)}>
                          {field}
                          <sup
                            className={
                              props.fields[field].isRequired ? "required" : ""
                            }
                          >
                            *
                          </sup>
                        </label>
                        {errors[field] && touched[field] ? (
                          <span className="message">{errors[field]}</span>
                        ) : null}
                      </div>
                      <Field
                        type={props.fields[field].type}
                        name={field}
                        id={fieldId(field)}
                        className={
                          errors[field] && touched[field] ? "error" : ""
                        }
                      />
                    </div>
                  );
              }
            })}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </React.Fragment>
      </Form>
    </StyledForms>
  );
};

Forms.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  schema: PropTypes.object.isRequired
};

export default withFormik({
  mapPropsToValues: props => {
    return getInitialValues(props.fields);
  },
  validationSchema: props => props.schema,
  handleSubmit: (values, props) => {
    props.props.handleSubmit(values, props.resetForm);
  }
})(Forms);
