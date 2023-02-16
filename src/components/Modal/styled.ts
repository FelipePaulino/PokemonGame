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
`;

export const ImagePokemon = styled.img`
  width: 200px;
`;

export const Form = styled.div`
  width: 100%;
  background-color: white;
  margin: 30% 0 0;
  padding: 0 0 30%;
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

export const NameBox = styled.div`
  margin: 30px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconEdit = styled.img`
  margin: 20px;
  cursor: pointer;
`;

export const Name = styled.p`
  font-size: 22px;
  font-family: sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export const IconCheck = styled.div`
  width: 40px;
  height: 40px;
  margin: 30px 0 30px 30px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 19px 5px #ccc;
`;

export const IconClose = styled.div`
  width: 40px;
  margin: 30px 10px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0px 3px 19px 0 #ccc;
`;

export const IconImg = styled.img`
  max-width: 35px;
`;

export const InputEdit = styled.input`
  width: 40%;
  height: 45px;
  font-size: 22px;
  border-radius: 10px;
  font-family: sans-serif;
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0px 3px 19px 5px #ccc;
`;

export const FeaturesBox = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
`;

export const PokemonsTypes = styled.div`
  display: flex;
  justify-content: center;
`;

export const BadgeTypes = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  text-align: center;
  padding: 0 20px;
  margin: 20px 5px;
  border-radius: 20px;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const BoxPokeball = styled.div`
  position: fixed;
  width: 400px;
  bottom: 90px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    bottom: 0;
  } ;
`;

export const Pokeball = styled.img`
  cursor: pointer;
`;

export const Statistics = styled.ul`
  margin: 30px 30px;
`;
