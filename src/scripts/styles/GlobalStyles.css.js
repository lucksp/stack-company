import { createGlobalStyle } from "styled-components";

// colors
// light gray: #d1ccc0;
// dark gray: ##84817a;
// link blue: #34ace0;
// dark green: #218c74;
// light green: #33d9b2;
// title orage: #ff793f;
// purple: #706fd3;
// err red: #ff5252;

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');


body {
    font-family: 'Open Sans', sans-serif;
    margin: 24px;
    box-sizing: border-box;
}
a {
    text-decoration: none;
    color: #34ace0;
    font-weight: 300;
  }
`;
