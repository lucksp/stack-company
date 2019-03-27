import React from "react";
import PropTypes from "prop-types";

// styled
import StyledSection from "./Section.css";

const Section = ({ sectionTitle, data }) => {
  return (
    <StyledSection className="section">
      <div className="head">{sectionTitle}</div>
      <div className="wrapper">
        <div className="content">
          {Object.keys(data).map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="item-title">{[item]}</div>
                <div className="item-content">{data[item]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </StyledSection>
  );
};

Section.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    company: PropTypes.string
  }).isRequired
};

export default Section;
