import styled from "styled-components";

interface Props {
  border?: boolean;
}

export const Sections = styled.div<Props>`
  width: 33%;
  font-family: sans-serif;
  text-align: center;
  text-transform: uppercase;
  border-left: ${({ border }) => (border ? " 2px solid #c5cee0" : "none")};
  border-right: ${({ border }) => (border ? " 2px solid #c5cee0" : "none")}; ;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const InputFeature = styled.input`
  width: 45px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px;
`;
