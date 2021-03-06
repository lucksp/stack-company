import styled from "styled-components";

export default styled.div`
  margin: 16px;
  .form-item {
    display: flex;
    flex-flow: column nowrap;
    padding-bottom: 16px;

    .wrapper-label {
      display: flex;
      justify-content: space-between;
      align-items: center;

      label {
        text-transform: uppercase;
        font-size: 14px;
        color: #84817a;

        sup {
          &.required {
            margin-left: 1px;
            color: #ff5252;
          }
        }
      }
      .message {
        color: #ff5252;
        font-size: 12px;
        text-transform: uppercase;
      }
    }

    input,
    select {
      border: 1px solid #84817a;
      border-radius: 4px;
      height: 22px;
      font-size: 14px;
      &.error {
        border: 1px solid #ff5252;
      }
    }
    select {
      height: 26px;
      background-color: #fff;
    }

    &:last-of-type {
      margin-bottom: 16px;
    }
  }
  button[type="submit"] {
    border: none;
    border-radius: 4px;
    background-color: #218c74;
    color: #f7f1e3;
    padding: 8px 16px;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.4s linear;
    &:hover {
      background-color: #33d9b2;
      transition: background-color 0.4s linear;
    }
    &:disabled {
      background-color: #f7f1e3;
      cursor: no-drop;
      color: #84817a;
    }
  }
`;
