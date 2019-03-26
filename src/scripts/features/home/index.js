import React from "react";
import { connect } from "react-redux";
import Card from "../../components/card";
import CompanyCard from "../company/cardGeneral";
import Forms from "../forms";

// styled
import StyledHome from "./Home.css";
import {
  NewCompanySchema,
  NewEmployyeSchema
} from "../../helpers/fieldsSchema";
import { submitNewCompany } from "../../redux/actions/company";
import { submitNewEmployee } from "../../redux/actions/employees";

const newCompanyFields = {
  name: {
    type: "text"
  },
  address: {
    type: "text"
  },
  revenue: {
    type: "number"
  },
  phone: {
    type: "tel"
  }
};

const newEmployeeFields = companies => {
  return {
    name: {
      type: "text"
    },
    address: {
      type: "text"
    },
    company: {
      type: "select",
      options: companies
    }
  };
};

const Home = props => {
  const handleCompanySubmit = async (values, resetForm) => {
    await props.submitNewCompany(values).then(response => {
      if (response === "success") {
        resetForm();
      }
    });
  };

  const handleEmployeeSubmit = async (values, resetForm) => {
    await props.submitNewEmployee(values).then(response => {
      if (response === "success") {
        resetForm();
      }
    });
  };

  return (
    <StyledHome>
      <div className="column main">
        <Card
          headerText="Company"
          id="company"
          renderWith={() => (
            <React.Fragment>
              <div className="header">Companies</div>
              <div className="main">
                <CompanyCard />
              </div>
            </React.Fragment>
          )}
        />
      </div>
      <div className="column aside">
        <Card
          headerText="Create New Company"
          id="new-company"
          renderWith={() => (
            <React.Fragment>
              <div className="header">Add Company</div>
              <div className="main">
                <Forms
                  handleSubmit={handleCompanySubmit}
                  formName="new-company"
                  fields={newCompanyFields}
                  schema={NewCompanySchema}
                />
              </div>
            </React.Fragment>
          )}
        />
        <Card
          headerText="Create New Person"
          id="new-person"
          data={props.companies}
          renderWith={data => (
            <React.Fragment>
              <div className="header">Add Person</div>
              <div className="main">
                <Forms
                  handleSubmit={handleEmployeeSubmit}
                  formName="new-employee"
                  fields={newEmployeeFields(data)}
                  schema={NewEmployyeSchema}
                />
              </div>
            </React.Fragment>
          )}
        />
      </div>
    </StyledHome>
  );
};

const mapStateToProps = state => {
  return { companies: state.company };
};

const mapDispatchToProps = { submitNewCompany, submitNewEmployee };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
