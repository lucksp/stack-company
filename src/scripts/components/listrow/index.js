import React from "react";

// styled
import StyledListRow from "./ListRows.css";
import Section from "./section";

const ListRow = props => {
  return (
    <StyledListRow>
      <div className="title">{props.title}</div>
      {Object.keys(props.data).map((employeeId, index) => {
        return (
          <Section
            sectionTitle={props.data[employeeId].name}
            key={index}
            data={props.data[employeeId]}
          />
        );
      })}
    </StyledListRow>
  );
};

export default ListRow;
