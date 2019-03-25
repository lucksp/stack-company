import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//styled
import StyledCompanyCard from "./CompanyCard.css";
import PropTypes from "prop-types";
import Card from "../../../components/card";

const CompanyCard = props => {
  return (
    <StyledCompanyCard>
      <div>
        {props.data.length
          ? props.data.map(item => {
              const linkTo = {
                pathname: item.id
              };

              return (
                <Card
                  key={item.id}
                  id={`card-${item.id}`}
                  renderWith={() => (
                    <React.Fragment>
                      <div className="header">{item.company.name}</div>
                      <div className="main">
                        <div className="company-detail">
                          {Object.keys(item.company).map((detail, index) => {
                            return (
                              <React.Fragment key={index}>
                                <div className="detail title">{[detail]}</div>
                                <div className="detail data">
                                  {item.company[detail]}
                                </div>
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                      <div className="footer">
                        <Link to={linkTo}>Company Overview</Link>
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      address: PropTypes.string,
      revenue: PropTypes.string,
      phone: PropTypes.string
    }) //.isRequired
  )
};
const mapStateToProps = state => {
  return {
    data: state.company.companyData
  };
};
export default connect(mapStateToProps)(CompanyCard);
