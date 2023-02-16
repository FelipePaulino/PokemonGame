import styled from "styled-components";

export const SideBarWrapper = styled.aside`
  background-color: transparent;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
`;

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SideBarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  border: 4px solid #004a45;
  border-radius: 12.8rem;
  font-size: 4rem;
  font-weight: bold;
  color: #004a45;
  cursor: pointer;
  transition: all 0.2s;
  background-color: #00d68f;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: sans-serif;
  overflow: hidden;

  img {
    height: 80px;
  }

  &:hover {
    background-color: #004a45;
    color: #00d68f;
  }

  &:not(last-of-type) {
    margin-bottom: 1.6rem;
  }
`;
