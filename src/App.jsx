import { Routes, Route } from "react-router-dom";
import Principal from "./Components/Principal/Principal";
import MainLayout from "./Main/MainLayout";
import MenuReproduccion from "./Components/MenuReproduccion/MenuReproduccion";
import Album from "./Components/Album/Album";
import Albumes from "./Components/Albumes/Albumes";
import Artistas from "./Components/Artistas/Artistas";

import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="" element={<Principal />} />
      <Route path="Inicio/*" element={<MainLayout />}>
        <Route path="" element={<MenuReproduccion />} />
        <Route path="Albumes" element={<Albumes />} />
        <Route path="Album/:Id" element={<Album />} />
        <Route path="Artistas" element={<Artistas />} />
      </Route>
    </Routes>
  );
}

export default App;
