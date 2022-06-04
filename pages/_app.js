import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../public/shabnam.css";
import Head from "next/head";
import React from "react";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Shabnam !important;
    line-height: 1.5;
    direction: rtl;
    letter-spacing: normal;
    overflow-x:hidden;
  
  }
  @font-face {
    font-family: Shabnam;
    src: url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.eot');
    src: url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.eot?#iefix') format('embedded-opentype'),
         url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.woff2') format('woff2'),
         url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.woff') format('woff'),
         url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.ttf') format('truetype');
    font-weight: normal;
 
  }
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
  }
  :root {
    --tab-background-color: #f2f3f5;
    --text-secondary: #a3a5a8;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }button {
    cursor:pointer;
  }
  

`;

const theme = {
  colors: {
    primary: "#784ed1",
    secondary: "#15d1c6",
    green: "#109A91",
    darkgray: "#343a40",
    gray: "#6c757d",
    blue: "#007bff",
    indigo: "#6610f2",
    purple: "#6f42c1",
    textPrimary: "#14151a",
    cardColor: "#fff",
    backgroundColor: "#f2f3f5",
    hoverColor: "#e3e4e5",
    scrollbarColor: "#a3a5a8",
    scrollbarhover: "#292c34",
    btnInactiveColor: "#a3a5a8",
    btnInactiveFill: "#e3e4e5",
  },
  fontSize: {
    normall: "15px",
  },
  fontFamily: "Shabnam",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>نوبیتکس | خرید و فروش ارز دیجیتال | صرافی آنلاین</title>
        <link
          data-n-head="ssr"
          rel="icon"
          sizes="64x64"
          type="image/x-icon"
          href="/images/favicon.ico"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
