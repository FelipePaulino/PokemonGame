import React from "react";
import * as S from "./styled";

import { typesTrasnlations } from "../../utills/typesTranslation";
import { Option, options } from "../../utills/options";
import { Data } from "../../types/pokemon";

interface DropdownModifyProps {
  name: string;
  pokemon: string;
  customPokemon: Data;
  setCustomPokemon: (value: Data) => void;
}

export default function DropdownModify({
  name,
  pokemon,
  customPokemon,
  setCustomPokemon,
}: DropdownModifyProps) {
  return (
    <>
      <S.Select
        onChange={(e) =>
          setCustomPokemon({ ...customPokemon, [name]: e.target.value } as Data)
        }
      >
        <S.DropdownOption value={typesTrasnlations[pokemon]}>
          {typesTrasnlations[pokemon && pokemon]}
        </S.DropdownOption>
        {options &&
          options.map((option: Option, index: number) => (
            <S.DropdownOption key={index} value={option.value}>
              {option.text}
            </S.DropdownOption>
          ))}
      </S.Select>
    </>
  );
}
