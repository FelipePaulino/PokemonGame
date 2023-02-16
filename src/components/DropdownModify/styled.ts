import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  font-weight: 400;
  font-size: 1.6rem;
  text-transform: uppercase;
  padding: 5px 0;
  background: none;
  border: none;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  appearance: none;
  color: white;

  &:focus,
  &:active {
    border-color: #598bff;
  }
`;
export const DropdownOption = styled.option`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #c5cef4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
