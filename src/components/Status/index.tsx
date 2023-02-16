import { abilitiesArray, Data } from "../../types/pokemon";
import TitleTopics from "../TitleTopics";
import * as S from "./styled";

interface StatusProps {
  pokemon: Data;
  skillsArray: string[] | abilitiesArray[];
  customPokemon: Data;
  setCustomPokemon: (value: Data) => void;
}

export default function Status({
  pokemon,
  skillsArray,
  customPokemon,
  setCustomPokemon,
}: StatusProps) {
  return (
    <>
      {pokemon.id !== 0 ? (
        <>
          <TitleTopics label={"habilidades"} />
          <S.Status>
            <S.Techniques>{skillsArray.toString()}</S.Techniques>
          </S.Status>
        </>
      ) : (
        <>
          <TitleTopics label={"habilidades"} />
          <S.Status>
            <S.InputAbilities
              placeholder={skillsArray.toString()}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) =>
                setCustomPokemon({
                  ...customPokemon,
                  abilities: [e.target.value],
                } as Data)
              }
            />
          </S.Status>
        </>
      )}
    </>
  );
}
