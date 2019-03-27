import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//styled
import StyledCompanyCard from "./CompanyCard.css";
import PropTypes from "prop-types";
import Card from "../../../components/card";

export const CompanyCard = props => {
  return (
    <StyledCompanyCard>
      <div>
        {Object.keys(props.data).length
          ? Object.keys(props.data).map(companyId => {
              const linkTo = {
                pathname: companyId
              };

              return (
                <Card
                  key={companyId}
                  id={`card-${companyId}`}
                  renderWith={() => (
                    <React.Fragment>
                      <div className="header">
                        {props.data[companyId].details.name}
                      </div>
                      <div className="main">
                        <div className="company-detail">
                          {Object.keys(props.data[companyId].details).map(
                            (detail, index) => {
                              return (
                                <React.Fragment key={index}>
                                  <div className="detail title">{[detail]}</div>
                                  <div className="detail data">
                                    {props.data[companyId].details[detail]}
                                  </div>
                                </React.Fragment>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="footer">
                        <Link to={linkTo} params={{ id: companyId }}>
                          Company Overview
                        </Link>
                      </div>
                    </React.Fragment>
                  )}
                />
              );
            })
          : "Please add a new company"}
      </div>
    </StyledCompanyCard>
  );
};

CompanyCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.shape({
      details: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        revenue: PropTypes.string,
        phone: PropTypes.string
      }),
      count: PropTypes.number
    })
  }).isRequired
};

const mapStateToProps = state => {
  return {
    data: state.company
  };
};

export default connect(mapStateToProps)(CompanyCard);
