import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PokemonContextProvider from "./Provider/context";

ReactDOM.render(
  <PokemonContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PokemonContextProvider>,
  document.getElementById("root")
);
