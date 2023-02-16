import React, { useEffect, useState } from "react";
import * as S from "./styled";
import pokeball from "../../assets/images/pokeball.png";
import editIcon from "../../assets/images/editIcon.png";
import checkIcon from "../../assets/images/checkIcon.png";
import close from "../../assets/images/close.png";
import Button from "../Button";
import { typesTrasnlations } from "../../utills/typesTranslation";
import { typePower } from "../../utills/typePower";
import { Data, PokemonType } from "../../types/pokemon";
import { usePokemon } from "../../Provider/context";
import DropdownModify from "../DropdownModify";
import Statistics from "../Statistics";
import Sections from "../Sections";
import Status from "../Status";
import TitleTopics from "../TitleTopics";

interface Modal {
  pokemon: PokemonType;
  setPokemon: React.Dispatch<React.SetStateAction<PokemonType | Data>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  goPokeball: (dado: PokemonType) => void;
  isMyPokemon: boolean;
  removePokemon: (dado: PokemonType) => void;
}

export default function Modal({
  pokemon,
  setPokemon,
  setOpenModal,
  goPokeball,
  isMyPokemon,
  removePokemon,
}: Modal) {
  const [edit, setEdit] = useState(false);
  const [typing, setTyping] = useState<string>("");
  const { pokemons, setPokemons } = usePokemon();
  const [customPokemon, setCustomPokemon] = useState<Data>();

  const skillsArray =
    pokemon.id === 0
      ? pokemon.abilities
      : pokemon?.abilities.map((item) => item?.ability?.name);

  const isEdit = pokemons.find((item) => item.name === pokemon?.name);

  const changeName = (name: string) => {
    setCustomPokemon({ ...customPokemon, name } as Data);
  };

  useEffect(() => {
    if (isEdit) {
      setCustomPokemon(isEdit as Data);
    }
  }, [pokemon]);

  useEffect(() => {
    if (customPokemon && isEdit) {
      const index = pokemons.indexOf(isEdit);
      pokemons[index] = customPokemon;
      setPokemon(customPokemon);
      setEdit(false);
    }
  }, [customPokemon]);

  useEffect(() => {
    setPokemons(pokemons);
    localStorage.setItem("pokemon", JSON.stringify(pokemons));
  }, [customPokemon]);

  console.log(pokemon, "pokemon");
  const existingPokemonHp =
    pokemon?.id !== 0 ? pokemon?.stats[0].base_stat : undefined;
  const existingPokemonHeigth = pokemon?.id !== 0 ? pokemon?.height : undefined;
  const creatingPokemonHeigth = pokemon?.id === 0 ? pokemon?.height : undefined;
  const creatingPokemonHp = pokemon?.id === 0 ? pokemon?.hp : undefined;
  const existingPokemonDefense =
    pokemon?.id !== 0 ? pokemon?.stats[2]?.base_stat : undefined;
  const creatingPokemonDefense =
    pokemon?.id === 0 ? pokemon?.defense : undefined;
  const existingPokemonAttack =
    pokemon?.id !== 0 ? pokemon?.stats[1].base_stat : undefined;
  const creatingPokemonAttack = pokemon?.id === 0 ? pokemon?.attack : undefined;
  const existingPokemonSpecialDefense =
    pokemon?.id !== 0 ? pokemon?.stats[4].base_stat : undefined;
  const creatingPokemonSpecialDefense =
    pokemon?.id === 0 ? pokemon?.specialDefense : undefined;
  const existingPokemonSpecialAttack =
    pokemon?.id !== 0 ? pokemon?.stats[3].base_stat : undefined;
  const creatingPokemonSpecialAttack =
    pokemon?.id === 0 ? pokemon?.specialAttack : undefined;
  const existingPokemonSpeed =
    pokemon?.id !== 0 ? pokemon?.stats[5].base_stat : undefined;
  const creatingPokemonSpeed = pokemon?.id === 0 ? pokemon?.speed : undefined;
  console.log(pokemon?.id, "pokemon?.id");
  return (
    <S.Modal>
      <S.Form>
        <S.Close onClick={() => setOpenModal(false)}>
          <S.X src={close} />
        </S.Close>
        <S.ImagePokemonBox>
          <S.ImagePokemon
            src={
              pokemon?.sprites?.front_shiny
                ? pokemon?.sprites?.front_shiny
                : pokeball
            }
          />
        </S.ImagePokemonBox>
        {!edit ? (
          <S.NameBox>
            <S.Name>{pokemon && pokemon?.name}</S.Name>
            {isEdit && (
              <S.IconEdit src={editIcon} onClick={() => setEdit(true)} />
            )}
          </S.NameBox>
        ) : (
          <S.NameBox>
            <S.InputEdit
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setTyping(e.target.value)}
            />
            <S.IconCheck onClick={() => changeName(typing)}>
              <S.IconImg src={checkIcon} />
            </S.IconCheck>
            <S.IconClose onClick={() => setEdit(false)}>
              <S.IconImg src={close} />
            </S.IconClose>
          </S.NameBox>
        )}
        <S.FeaturesBox>
          <Sections
            name={"hp"}
            pokemon={pokemon as unknown as Data}
            existing={existingPokemonHp as number}
            creating={creatingPokemonHp as number}
            customPokemon={customPokemon as unknown as Data}
            setCustomPokemon={setCustomPokemon}
          />
          <Sections
            name={"altura"}
            pokemon={pokemon as unknown as Data}
            existing={existingPokemonHeigth as number}
            creating={creatingPokemonHeigth as number}
            customPokemon={customPokemon as unknown as Data}
            setCustomPokemon={setCustomPokemon}
            border={true}
          />
          <Sections
            name={"peso"}
            pokemon={pokemon as unknown as Data}
            existing={`${pokemon && pokemon?.weight}`}
            creating={`${pokemon && pokemon?.weight}`}
            customPokemon={customPokemon as unknown as Data}
            setCustomPokemon={setCustomPokemon}
          />
        </S.FeaturesBox>
        <TitleTopics label={"tipo"} />
        {pokemon && pokemon?.id !== 0 ? (
          <S.PokemonsTypes>
            {pokemon &&
              pokemon?.types.map((item, index) => {
                return (
                  <S.BadgeTypes
                    key={index}
                    style={{ backgroundColor: typePower(item?.type?.name) }}
                  >
                    {typesTrasnlations[item?.type?.name]}
                  </S.BadgeTypes>
                );
              })}
          </S.PokemonsTypes>
        ) : (
          <S.PokemonsTypes>
            <S.BadgeTypes
              style={{ backgroundColor: typePower(pokemon && pokemon?.type1) }}
            >
              <DropdownModify
                name={"type1"}
                pokemon={pokemon.type1}
                customPokemon={customPokemon as unknown as Data}
                setCustomPokemon={setCustomPokemon}
              />
            </S.BadgeTypes>
            {pokemon?.type2.length > 0 && (
              <S.BadgeTypes
                style={{
                  backgroundColor: typePower(pokemon && pokemon?.type2),
                }}
              >
                <DropdownModify
                  name={"type2"}
                  pokemon={pokemon.type2}
                  customPokemon={customPokemon as unknown as Data}
                  setCustomPokemon={setCustomPokemon}
                />
              </S.BadgeTypes>
            )}
          </S.PokemonsTypes>
        )}
        <Status
          pokemon={pokemon as unknown as Data}
          skillsArray={skillsArray}
          customPokemon={customPokemon as unknown as Data}
          setCustomPokemon={setCustomPokemon}
        />
        {isMyPokemon && (
          <>
            <TitleTopics label={"estatísticas"} />
            <S.Statistics>
              <Statistics
                name={"defesa"}
                technique={"defense"}
                pokemon={pokemon as unknown as Data}
                existing={existingPokemonDefense as number}
                creating={creatingPokemonDefense as number}
                customPokemon={customPokemon as unknown as Data}
                setCustomPokemon={setCustomPokemon}
              />
              <Statistics
                name={"ataque"}
                technique={"attack"}
                pokemon={pokemon as unknown as Data}
                existing={existingPokemonAttack as number}
                creating={creatingPokemonAttack as number}
                customPokemon={customPokemon as unknown as Data}
                setCustomPokemon={setCustomPokemon}
              />
              <Statistics
                name={"defesa-especial"}
                technique={"specialDefense"}
                pokemon={pokemon as unknown as Data}
                existing={existingPokemonSpecialDefense as number}
                creating={creatingPokemonSpecialDefense as number}
                customPokemon={customPokemon as unknown as Data}
                setCustomPokemon={setCustomPokemon}
              />
              <Statistics
                name={"ataque-especial"}
                technique={"specialAttack"}
                pokemon={pokemon as unknown as Data}
                existing={existingPokemonSpecialAttack as number}
                creating={creatingPokemonSpecialAttack as number}
                customPokemon={customPokemon as unknown as Data}
                setCustomPokemon={setCustomPokemon}
              />
              <Statistics
                name={"velocidade"}
                technique={"speed"}
                pokemon={pokemon as unknown as Data}
                existing={existingPokemonSpeed as number}
                creating={creatingPokemonSpeed as number}
                customPokemon={customPokemon as unknown as Data}
                setCustomPokemon={setCustomPokemon}
              />
            </S.Statistics>
          </>
        )}
        <S.BoxPokeball style={{ marginBottom: isMyPokemon ? "50px" : "0" }}>
          {isMyPokemon ? (
            <Button
              text={"Liberar Pokemon"}
              onClick={() => removePokemon(pokemon)}
            />
          ) : (
            <S.Pokeball src={pokeball} onClick={() => goPokeball(pokemon)} />
          )}
        </S.BoxPokeball>
      </S.Form>
    </S.Modal>
  );
}
