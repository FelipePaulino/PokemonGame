import { Data } from "../../types/pokemon";
import * as S from "./styled";
import shield from "../../assets/images/shield.png";
import speed from "../../assets/images/speed.png";
import sword from "../../assets/images/sword.png";

interface StatisticsProps {
  name: string;
  technique: string;
  pokemon: Data;
  existing: any;
  creating: number;
  customPokemon: Data;
  setCustomPokemon: (value: Data) => void;
}

export default function Statistics({
  name,
  technique,
  pokemon,
  existing,
  creating,
  customPokemon,
  setCustomPokemon,
}: StatisticsProps) {
  const iconValue = (label: any) => {
    if (label === "defesa" || label === "defesa-especial") {
      return shield;
    } else if (label === "ataque" || label === "ataque-especial") {
      return sword;
    } else {
      return speed;
    }
  };
  return (
    <>
      {pokemon.id !== 0 ? (
        <S.Levels>
          <S.BoxTextIcon>
            <S.Icon src={iconValue(name)} />
            <S.LevelsP>{name}</S.LevelsP>
          </S.BoxTextIcon>

          <S.LevelsP>
            {pokemon && pokemon?.id !== +0 ? existing : creating}
          </S.LevelsP>
        </S.Levels>
      ) : (
        <S.Levels>
          <S.BoxTextIcon>
            <S.Icon src={iconValue(name)} />
            <S.LevelsP>{name}</S.LevelsP>
          </S.BoxTextIcon>
          <S.InputFeature
            placeholder={pokemon && pokemon?.id !== +0 ? existing : creating}
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) =>
              setCustomPokemon({
                ...customPokemon,
                [technique]: +e.target.value,
              } as Data)
            }
          />
        </S.Levels>
      )}
    </>
  );
}
