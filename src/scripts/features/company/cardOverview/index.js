import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../../components/card";

// styled
import StyledCompanyOverView from "./CompanyCardOverview.css";
import ListRow from "../../../components/listrow";

const CompanyCardOverview = props => {
  const { companyOverview, employees } = props;

  return (
    <Card
      id={`overview-${props.match.params.id}`}
      cardType="company"
      renderWith={() => (
        <StyledCompanyOverView>
          <div className="section" id="section-company">
            <div className="header">
              <div>Overview of: {companyOverview.details.name}</div>
              <Link to="/">Go Back Home</Link>
            </div>
            <div className="main">
              {Object.keys(companyOverview.details).map((detail, index) => {
                return (
                  <div key={index} className="details-wrapper">
                    <div className="detail title">{[detail]}</div>
                    <div className="detail data">
                      {`${companyOverview.details[detail]}`}
                    </div>
                  </div>
                );
              })}
              <div className="details-wrapper">
                <div className="detail title">Total Employess</div>
                <div className="detail data">{companyOverview.count}</div>
              </div>
            </div>
          </div>
          <div className="section" id="section-employees">
            {Object.keys(employees).length ? (
              <ListRow data={employees} title="employee overview" />
            ) : (
              "No employees"
            )}
          </div>
        </StyledCompanyOverView>
      )}
    />
  );
};

const mapStateToProps = (state, otherProps) => {
  const { id } = otherProps.match.params;

  return {
    companyOverview: state.company[id],
    employees: state.employees
  };
};

export default connect(mapStateToProps)(CompanyCardOverview);
