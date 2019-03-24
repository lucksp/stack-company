import styled from "styled-components";

export default styled.div`
  box-shadow: 10px 10px 22px -8px rgba(71, 71, 135, 1);
  border-radius: 8px;
  border: 1px solid #d1ccc0;

  .header,
  .main,
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
  }
  .footer {
    border-top: 1px solid #d1ccc0;
  }
  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;
