import styled from "styled-components";

export const Modal = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10%;
  padding-top: 3%;
  background: linear-gradient(to right, #42e87a, #38f9d6);
  max-height: 80%;
  border-radius: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: none;
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
  }
`;

export const Close = styled.div`
  position: absolute;
  width: 30px;
  padding: 10px 20px;
  background-color: #f7f9fc;
  border: 2px solid #8f9bb3;
  border-radius: 100%;
  z-index: 1;
  top: -150px;
  right: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) {
    top: -120px;
  }
`;

export const X = styled.img``;

export const ImagePokemonBox = styled.div`
  width: 250px;
  height: 250px;
  margin: -125px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 5px solid #00d68f;
  border-radius: 100%;
  overflow: hidden;
  input[type="file"] {
    display: none;
}

`;

export const IconAdd = styled.label`
width: 30px;
height: 30px;
background-color: #ff3d71;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 3px solid white;
margin-left: -20px;
cursor: pointer;

img{
  width: 10px;
}
`;

export const ImagePokemon = styled.img``;

export const BoxAddImage = styled.div`
display:flex;
align-items: flex-end;
`;

export const Form = styled.div`
  width: 100%;
  background-color: white;
  margin: 30% 0 0;
  bottom: 0;
  position: relative;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: block;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  margin: 30px 20px;
`;

export const BoxButton = styled.div`
  margin: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconBox = styled.div`
  margin: 30px 20px;
  display: flex;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  width: 20px;
  margin: 0 10px;
  cursor: pointer;
`;


export const InputFile = styled.input`

`;
