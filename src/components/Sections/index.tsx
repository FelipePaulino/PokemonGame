import { Data } from "../../types/pokemon";
import * as S from "./styled";

interface SectionsProps {
  name: string;
  pokemon: Data;
  existing: number | string;
  creating: number | string;
  customPokemon: Data;
  setCustomPokemon: (value: Data) => void;
  border?: boolean;
}

export default function Sections({
  name,
  pokemon,
  existing,
  creating,
  customPokemon,
  border,
  setCustomPokemon,
}: SectionsProps) {
  const value = (name: string) => {
    switch (name) {
      case "hp":
        return `${existing ? existing : creating}/${
          existing ? existing : creating
        }`;
      case "peso":
        return `${existing ? existing : creating}kg`;
      case "altura":
        return `${existing ? existing : creating}m`;
    }
  };

  const valueInput = (name: string) => {
    switch (name) {
      case "peso":
        return "kg";
      case "altura":
        return "m";
    }
  };
  return (
    <>
      {pokemon.id !== 0 ? (
        <S.Sections border={border}>
          <S.Title>{name}</S.Title>
          <S.Text>{value(name)}</S.Text>
        </S.Sections>
      ) : (
        <S.Sections>
          <S.Title>{name}</S.Title>
          <S.Text>
            <S.InputFeature
              placeholder={`${existing ? existing : creating}`}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) =>
                setCustomPokemon({
                  ...customPokemon,
                  [name]: +e.target.value,
                } as Data)
              }
            />
            {valueInput(name)}
          </S.Text>
        </S.Sections>
      )}
    </>
  );
}
