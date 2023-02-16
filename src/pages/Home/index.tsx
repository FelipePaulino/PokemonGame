import Button from "../../components/Button";
import pokemonLogo from "../../assets/images/pokemonLogo.png"

import * as S from "./styled";

const HomePage = () => (
  <S.HomeWrapper>
    <S.PokemonLogo src={pokemonLogo}/>
    <a href="/map"><Button text={"start"}/></a>
 </S.HomeWrapper>
);

export default HomePage;
