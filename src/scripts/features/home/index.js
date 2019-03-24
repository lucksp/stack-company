import React from "react";

import Card from "../../components/card";
import CompanyCard from "../company/cardGeneral";
import Forms from "../forms";

// styled
import StyledHome from "./Home.css";
import { NewCompanySchema } from "../../helpers/fieldsSchema";

const newCompanyFields = {
  name: {
    type: "text",
    required: true
  },
  address: {
    type: "text",
    required: true
  },
  revenue: {
    type: "number",
    required: true
  },
  phone: {
    type: "tel",
    required: true
  }
};

const Home = () => {
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
              <Forms
                formName="new-company"
                fields={newCompanyFields}
                schema={NewCompanySchema}
              />
            </React.Fragment>
          )}
        />
        <Card
          headerText="Create New Person"
          id="new-person"
          renderWith={() => (
            <React.Fragment>
              <div className="header">Add Person</div>
              <div className="main">Adding Person</div>
            </React.Fragment>
          )}
        />
      </div>
    </StyledHome>
  );
};

export default Home;
