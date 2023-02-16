import Button from "../../components/Button";
import pokemonLogo from "../../assets/images/pokemonLogo.png";

import * as S from "./styled";

const HomePage = () => (
  <S.HomeWrapper>
    <S.PokemonLogo src={pokemonLogo} />
    <Button text={"start"} onClick={() => (window.location.href = "/map")} />
  </S.HomeWrapper>
);

export default HomePage;
