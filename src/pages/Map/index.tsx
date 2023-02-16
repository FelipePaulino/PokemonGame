import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import * as S from "./styled";
import ashFront from "../../assets/images/ashFront.png";
import ashLeftLeg from "../../assets/images/ashLeftLeg.png";
import ashRightLeg from "../../assets/images/ashRightLeg.png";
import ashStop from "../../assets/images/ashStop.png";
import searchTooltip from "../../assets/images/searchTooltip.png";
import searchingTooltip from "../../assets/images/searchingTooltip.png";
import tooltipError from "../../assets/images/tooltipError.png";
import Modal from "../../components/Modal";
import { usePokemon } from "../../Provider/context";
import NewModal from "../../components/NewModal";
import { Data, PokemonType } from "../../types/pokemon";

export default function MapPage() {
  const [pokemon, setPokemon] = useState<PokemonType | Data>();
  const [AshPosition, setAshPosition] = useState(ashFront);
  const [openModal, setOpenModal] = useState(false);
  const [openCreationModal, setOpenCreationModal] = useState(false);
  const [loading, setLoading] = useState<boolean>();
  const { pokemons, setPokemons } = usePokemon();
  const [isMyPokemon, setIsMyPokemon] = useState(false);

  const goPokeball = (pokemon: PokemonType) => {
    if (pokemons?.length < 6) {
      setPokemons([...pokemons, pokemon]);
    }
    localStorage.setItem("pokemon", JSON.stringify(pokemons));
    setOpenModal(false);
  };

  useEffect(() => {
    if (pokemons.length !== 0) {
      localStorage.setItem("pokemon", JSON.stringify(pokemons));
    }
  }, [pokemons]);
  let timer: ReturnType<typeof setTimeout> = 0 as unknown as ReturnType<
    typeof setTimeout
  >;
  useEffect(() => {
    if (loading) {
      if (AshPosition === ashLeftLeg) {
        timer = setTimeout(() => {
          setAshPosition(ashStop);
        }, 400);
      }
      if (AshPosition === ashStop) {
        timer = setTimeout(() => {
          setAshPosition(ashRightLeg);
        }, 400);
      }
      if (AshPosition === ashRightLeg) {
        timer = setTimeout(() => {
          setAshPosition(ashLeftLeg);
        }, 400);
      }

      return () => {
        clearTimeout(timer);
      };
    }
  }, [AshPosition]);

  useEffect(() => {
    if (AshPosition === ashLeftLeg) {
      setTimeout(() => {
        setAshPosition(ashStop);
      }, 1500);
    }
  }, []);

  const url = `https://pokeapi.co/api/v2/pokemon`;

  const getPokemon: () => void = async () => {
    setLoading(true);
    setIsMyPokemon(false);
    setAshPosition(ashLeftLeg);
    const newId = Math.floor(Math.random() * 807 + 1);
    try {
      const res = await axios.get(`${url}/${newId}`);
      setPokemon(res.data);
      setTimeout(() => {
        setAshPosition(ashFront);
        setOpenModal(true);
        setLoading(false);
      }, 2000);
    } catch (error) {
      window.location.href = "/";
    }
  };

  const removePokemon = (removed: PokemonType) => {
    const newCaptured = pokemons.filter((item) => item.id !== removed.id);
    setPokemons(newCaptured);
    setOpenModal(false);
    localStorage.setItem("pokemon", JSON.stringify(pokemons));
  };

  const AshWalk = () => {
    getPokemon();
  };
  return (
    <S.MapWrapper className="map">
      <Sidebar
        setOpenModal={setOpenModal}
        setPokemon={
          setPokemon as React.Dispatch<React.SetStateAction<PokemonType | Data>>
        }
        setIsMyPokemon={setIsMyPokemon}
        setOpenCreationModal={setOpenCreationModal}
      />
      <S.TooltipCard>
        <S.AshBox
          onClick={() => {
            AshPosition === ashFront && pokemons.length < 6 && AshWalk();
          }}
        >
          <S.Ash src={AshPosition} />
        </S.AshBox>
        {loading ? (
          <S.IconTooltip src={searchingTooltip} />
        ) : (
          <S.TooltipBox>
            <S.IconTooltip
              src={pokemons.length < 6 ? searchTooltip : tooltipError}
            />
          </S.TooltipBox>
        )}
      </S.TooltipCard>
      {openModal && (
        <Modal
          pokemon={pokemon as PokemonType}
          setPokemon={
            setPokemon as React.Dispatch<
              React.SetStateAction<PokemonType | Data>
            >
          }
          setOpenModal={setOpenModal}
          goPokeball={goPokeball}
          isMyPokemon={isMyPokemon}
          removePokemon={removePokemon}
        />
      )}
      {openCreationModal && (
        <NewModal setOpenCreationModal={setOpenCreationModal} />
      )}
    </S.MapWrapper>
  );
}
