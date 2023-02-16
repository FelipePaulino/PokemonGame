import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  padding: 20px;
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: #2e3a59;
`;

export const DropdownContent = styled.div`
  position: relative;
`;

export const Select = styled.select`
  width: 100%;
  font-weight: 400;
  font-size: 1.6rem;
  padding: 1.2rem 0 1.2rem 0.8rem;
  background: #ffffff;
  border: 2px solid #e4e9f2;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  appearance: none;
  color: #c5cef4;

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
`;

export const DropdownIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 2.5rem;
  height: auto;
  pointer-events: none;
`;

export const Alert = styled.p`
  color: red;
`
