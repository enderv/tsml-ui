import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Frame = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const spinnerBorder = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: 0.75s linear infinite ${spinnerBorder};
  border-radius: 50%;
  border-right-color: transparent;
  border: 0.25em solid currentColor;
  display: inline-block;
  height: 2rem;
  margin: 3rem !important;
  vertical-align: -0.125em;
  width: 2rem;
`;
