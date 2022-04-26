import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #F0F2F5;
  --red: #E52E4d;
  --blue: #5429CC;
  --green: #33cc95;
  --blue-light: #6933ff;
  --text-title: #363F5F;
  --text-body: #969cb3;
  --shape: #FFFFFF
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  // px Base * porcentagem (16px * 0,9375)
  html {
    @media(max-witdh: 1080px){
      font-size: 93.75%; // 15px
    }

    @media(max-witdh: 720px){
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight:  400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer
  }

  [disabled] {
    opacity: 0.6 ;
    cursor: not-allowed ;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;

    background: var(--background);

    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    border: none;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    & img:hover {
      filter: brightness(0.8);
    }
  }
`