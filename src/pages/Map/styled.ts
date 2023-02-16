import styled from "styled-components";
import img from "../../assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    overflow: hidden;
    background-size: 1300px 100%;
    background-position: center;
  }
`;

export const Ash = styled.img`
  /* @media (max-width: 768px) {
    width: 80px;
  } */
`;

export const AshBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const TooltipBox = styled.div`
  visibility: hidden;
`;
export const IconTooltip = styled.img``;

export const TooltipCard = styled.div`
   margin: 16px;
   display: flex;
   flex-direction: column-reverse;
   & ${AshBox}:hover + ${TooltipBox} {
      visibility: visible;
      display: flex;
      justify-content: center;
   }
`;
