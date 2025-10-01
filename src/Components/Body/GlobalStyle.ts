'use client';
import { createGlobalStyle } from "styled-components";
import { ResetCSS } from "./ResetCSS";

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  body {
    font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    background-image: url('/images/body-shape.svg');
    background-repeat: no-repeat;
     background-size:  1200px;
    background-position: right top;
    transition: background-color 0.3s ease, color 0.3s ease;

    @media ((min-width: 920px)) {
      background-size:  640px 750px;

    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  main {
    margin: auto;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
