import styled from "styled-components";

export const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1.25rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: #2e3a59;
`;

export const Input = styled.input`
  width: 100%;
  font-weight: 700;
  font-size: 1.6rem;
  padding: 1.2rem 0 1.2rem 0.8rem;
  background: #ffffff;
  border: 2px solid #e4e9f2;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:focus,
  &:active {
    border-color: #598bff;
  }

  &::placeholder {
    color: #c5cef4;
    font-weight: 400;
  }
`;

export const Alert = styled.p`
  color: red;
`;
