import { css } from '@emotion/react';

import styled from '@emotion/styled';

export const Stack = styled.div`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  gap: 1rem;
  height: 100%;
  line-height: 1.5;
  margin: 0 auto;
  padding: 1rem 0.75rem;
  width: 100%;
`;

export const globalStyle = css`
  html,
  body,
  div#tsml-ui {
    height: 100%;
    margin: 0;
  }
`;
