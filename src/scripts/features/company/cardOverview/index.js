import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../../components/card";

// styled
import StyledCompanyOverView from "./CompanyCardOverview.css";

const CompanyCardOverview = props => {
  const { companyOverview } = props;

  return (
    <Card
      id={`overview-${props.match.params.id}`}
      renderWith={() => (
        <StyledCompanyOverView>
          <div className="header">
            <div>Overview of: {companyOverview.details.name}</div>
            <Link to="/">Go Back Home</Link>
          </div>
          <div className="main">
            {Object.keys(companyOverview.details).map((detail, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="detail title">{[detail]}</div>
                  <div className="detail data">
                    {companyOverview.details[detail]}
                  </div>
                </React.Fragment>
              );
            })}
            <div className="detail title">Total Employess</div>
            <div className="detail count">{companyOverview.count}</div>
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
