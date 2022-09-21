import styled from '@emotion/styled';

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  margin-top: -1rem;

  @media print {
    display: none;
  }
`;

export const Cell = styled.div`
  flex: 0 0 auto;
  width: 50%;
  margin-top: 1rem;
  max-width: 100%;
  padding: 0 0.5rem;
  position: relative;

  @media (min-width: 992px) {
    flex: 1 0 0%;
  }
`;

export const Input = styled.input`
  appearance: none;
  background-clip: padding-box;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  color: #212529;
  display: block;
  flex: 1 1 auto;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  min-width: 0;
  outline-offset: -2px;
  padding: 0.375rem 0.75rem;
  position: relative;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 1%;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 0.25rem;
  border: 1px solid #6c757d;
  color: #6c757d;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  user-select: none;
  white-space: nowrap;
  z-index: 2;

  &:hover {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
  }

  &::after {
    border-bottom: 0;
    border-left: 0.3em solid transparent;
    border-right: 0.3em solid transparent;
    border-top: 0.3em solid;
    content: '';
    display: inline-block;
    vertical-align: 0.255em;
  }
`;

export const InputGroupForm = styled.form`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;

  input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: -1px;
  }
`;
