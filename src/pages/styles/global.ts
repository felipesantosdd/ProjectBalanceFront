import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url("https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg?w=1380&t=st=1692158621~exp=1692159221~hmac=ef7058aa1aa656e110129a0e27d6afee985de857f5c8d40831e1914414e79112") ;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    min-height: 100vw;
    min-height: 100vh;
  }
`;


export default GlobalStyles;
