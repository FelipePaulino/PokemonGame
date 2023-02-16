import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import MapPage from "./pages/Map";
import HomePage from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/map" element={<MapPage/>}  />
        <Route path="*" element={<HomePage/>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
