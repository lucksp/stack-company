import React from "react";
import PropTypes from "prop-types";

//styled
import StyledCard from "./Card.css";

const Card = props => {
  return (
    <StyledCard className="wrapper" id={props.id}>
      {props.renderWith(props.data)}
    </StyledCard>
  );
};

Card.propTypes = {
  headerText: PropTypes.string.isRequired,
  renderWith: PropTypes.func.isRequired
};

export default Card;
