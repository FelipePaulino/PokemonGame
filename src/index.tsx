import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PokemonContextProvider from "./context";

ReactDOM.render(
  <PokemonContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PokemonContextProvider>,
  document.getElementById("root")
);
