import GlobalStyled from "./assets/styles/globalStyled";
import Routes from "./routes";
import PokemonContextProvider from "./Provider/context";

function App() {
  return (
    <>
      <PokemonContextProvider>
        <GlobalStyled />
        <Routes />
      </PokemonContextProvider>
    </>
  );
}

export default App;
