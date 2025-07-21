import { Routes, Route } from "react-router-dom";
import Principal from "./Components/Principal/Principal";
import MainLayout from "./Main/MainLayout";
import MenuReproduccion from "./Components/MenuReproduccion/MenuReproduccion";
import Album from "./Components/Album/Album";
import Albumes from "./Components/Albumes/Albumes";
import Artistas from "./Components/Artistas/Artistas";
import Artista from "./Components/Artista/Artista";
import Genero from "./Components/GeneroCancioones/GeneroCanciones";
import Favoritos from "./Components/Favoritos/Favoritos";
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
        <Route path="Artista/:Id" element={<Artista />} />
        <Route path="Genero/:Genero" element={<Genero />} />
        <Route path="Favoritos" element={<Favoritos />} />
      </Route>
    </Routes>
  );
}

export default App;
