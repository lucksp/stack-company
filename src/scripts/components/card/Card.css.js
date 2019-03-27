import styled from "styled-components";

export default styled.div`
  box-shadow: 10px 10px 22px -8px rgba(71, 71, 135, 1);
  border-radius: 8px;
  border: 1px solid #d1ccc0;

  .header,
  .footer {
    padding: 8px;
  }

  .header {
    background-color: #84817a;
    border-radius: 7px 7px 0 0;
    color: #f7f1e3;
  }

  .main {
    border-top: 1px solid #d1ccc0;
    padding: ${props => {
      switch (props.cardType) {
        case "employee":
          return "16px;";
        case "company":
          return "32px;";
        default:
          return "8px;";
      }
    }};
  }
  .footer {
    border-top: 1px solid #d1ccc0;
  }
  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;
