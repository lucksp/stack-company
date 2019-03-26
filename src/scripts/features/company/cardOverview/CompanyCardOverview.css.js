import styled from "styled-components";

export default styled.div`
  font-size: 14px;
  .header,
  .main,
  .footer {
    padding: 8px 16px;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .main {
    padding: 32px;
  }
  .detail {
    margin-bottom: 8px;
    text-transform: capitalize;
  }
  .title {
    font-weight: 600;
  }
`;
