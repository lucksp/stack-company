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
  id: PropTypes.string.isRequired,
  renderWith: PropTypes.func.isRequired
};

export default Card;
