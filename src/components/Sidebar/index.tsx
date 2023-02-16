import React from "react";
import Button from "../Button";
import pokeball from "../../assets/images/pokeball.png";
import iconPlus from "../../assets/images/plus.png";
import * as S from "./styled";
import { usePokemon } from "../../context";
import { Data, PokemonType } from "../../types/pokemon";

interface SidebarProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPokemon: React.Dispatch<React.SetStateAction<PokemonType | Data>>;
  setIsMyPokemon: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCreationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  setOpenModal,
  setPokemon,
  setIsMyPokemon,
  setOpenCreationModal,
}: SidebarProps) {
  const { pokemons } = usePokemon();

  const existPokemonCreate = pokemons.find((item) => item.id === 0);

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {pokemons &&
          pokemons?.map((item, index) => {
            return (
              <S.SideBarItem
                key={index}
                onClick={() => {
                  setPokemon(item);
                  setIsMyPokemon(true);
                  setOpenModal(true);
                }}
              >
                <img
                  alt="thumbnail pokemon"
                  src={
                    item?.sprites.front_shiny !== ""
                      ? item?.sprites?.front_shiny
                      : pokeball
                  }
                />
              </S.SideBarItem>
            );
          })}
        {pokemons.length < 6 && <S.SideBarItem>?</S.SideBarItem>}
      </S.SideBarList>
      {existPokemonCreate === undefined && (
        <Button
          icon={iconPlus}
          onClick={() => {
            pokemons.length < 6 && setOpenCreationModal(true);
          }}
        />
      )}
    </S.SideBarWrapper>
  );
}
