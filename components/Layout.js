import react, { Children } from "react";
import styled, { css } from "styled-components";
import { Header } from "./Header";
import { Main } from "./Main";

export const Layout = ({ children }) => {
  return <Continar>{children}</Continar>;
};

const Continar = styled.div`
  width: 100%;
  max-width: 1324px;
  padding: 0px 15px;
  margin: auto;
`;
