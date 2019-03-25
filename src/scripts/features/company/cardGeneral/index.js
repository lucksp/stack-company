import React from "react";
import { connect } from "react-redux";

//styled
import StyledCompanyCard from "./CompanyCard.css";
import PropTypes from "prop-types";

const CompanyCard = props => {
  return (
    <StyledCompanyCard>
      <div>
        {props.data.length
          ? props.data.map(item => {
              return <div key={item.id}>{item.name}</div>;
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
    })
  )
};
const mapStateToProps = state => {
  return {
    data: state.company.companyData
  };
};
export default connect(mapStateToProps)(CompanyCard);
