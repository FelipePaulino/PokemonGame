import { createContext, useContext, useEffect, useState } from "react";
import { Data, PokemonType } from "../types/pokemon";

type MyContextProps = {
  pokemons: Array<PokemonType | Data>;
  setPokemons: (pokemons: Array<PokemonType | Data>) => void;
};
type MyProviderProps = {
  children: React.ReactNode;
};

const PokemonContext = createContext({} as MyContextProps);

const PokemonContextProvider = ({ children }: MyProviderProps) => {
  const [pokemons, setPokemons] = useState<Array<PokemonType | Data>>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem("pokemon");
      if (item !== null) {
        const response = JSON.parse(item);
        if (response) setPokemons(response);
      }
    }
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  const { pokemons, setPokemons } = context;
  return { pokemons, setPokemons };
};
export default PokemonContextProvider;
