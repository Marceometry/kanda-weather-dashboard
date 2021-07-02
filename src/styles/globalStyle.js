import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100vh;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1 {
    font-family: 'Rubik', sans-serif;
  }
  input, span, label, button, p {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, span, input, label, button, p {
    color: #444444;
  }

  body {
    background: #f0f0f0;
    padding: 3rem 5rem;
  }
        
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  form {
    display: flex;
    gap: 2rem;
  }

  select {
    min-width: 200px;
    padding: .5rem;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
  }

  main {
    margin-top: 3.5rem;
    gap: 3rem;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    text-align: center;
  }

  main > div {
    flex: 1;
  }

  .App {
    height: 100vh;
  }

  .forecast-illustration {
    width: 40%;
    margin: 2rem 0;
  }

  .condition {
    font-size: 2rem;
  }

  .main-forecast, section, select {
    background: #fdfdfd;
    border: 1px solid #c4c4c4;
  }

  .main-forecast span strong {
    margin-left: .5rem;
  }

  .main-forecast span {
    display: flex;
    align-items: center;
  }

  .main-forecast span img {
    width: 2.5rem;
  }

  .main-forecast, section {
    border-radius: 8px;
    padding: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
  }

  main > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .section-row, .section-row p {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  section:last-child {
    gap: 2.5rem;
  }

  .flood-risk {
    padding: .5rem 2.5rem;
    background: #FFCECE;
    border-radius: 20px;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flood-risk.green {
    background: #BCFFB1;
  }

  .flood-risk img {
    width: 2rem;
  }

  section {
    min-width: 300px;
  }

  section div img {
    width: 1.75rem;
  }

  div  {
    font-size: 1.25rem;
  }
`;

export default GlobalStyle;