import React from "react";

import Card from "../../components/card";
import CompanyCard from "../company/cardGeneral";

// styled
import StyledHome from "./Home.css";

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
              <div className="main">Adding Company</div>
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
