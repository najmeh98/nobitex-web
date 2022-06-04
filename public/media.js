import react from "react";
import styled, { css } from "styled-components";

export const desktop = (body) => css`
  @media (min-width: 1199px) {
    ${body};
  }
`;
export const noMobile = (body) => css`
  @media (min-width: 768px) and (max-width: 1200px) {
    ${body};
  }
`;

export const tablet = (body) => css`
  @media (max-width: 1200px) {
    ${body};
  }
`;

export const notablet = (body) => css`
  @media (min-width: 1200px) and (max-width: 1600px) {
    ${body};
  }
`;
