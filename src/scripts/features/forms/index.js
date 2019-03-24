import React, { Component } from "react";
import { Formik, Field, FieldArray, Form } from "formik";

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

const formName = name => `form-${name}`;

class Forms extends Component {
  render() {
    return (
      <StyledForms>
        <Formik
          initialValues={getInitialValues(this.props.fields)}
          validationSchema={this.props.schema}
          onSubmit={values => {
            console.log(values, " submitted");
          }}
          fields={this.props.fields}
          render={({ values, errors, touched, isSubmitting }) => (
            <Form id={formName(this.props.formName)}>
              <FieldArray
                name="field-company"
                render={props => (
                  <div>
                    {values &&
                      Object.keys(values).map((field, index) => (
                        <div key={index} className="form-item">
                          <label htmlFor={fieldId(field)}>
                            {field}
                            <sup>*</sup>
                          </label>
                          <Field
                            name={field}
                            id={fieldId(field)}
                            className={
                              errors[field] && touched[field] ? "error" : ""
                            }
                          />
                        </div>
                      ))}
                    <button
                      type="submit"
                      disabled={isSubmitting || Object.keys(errors).length}
                    >
                      Submit
                    </button>
                  </div>
                )}
              />
            </Form>
          )}
        />
      </StyledForms>
    );
  }
}

export default Forms;
