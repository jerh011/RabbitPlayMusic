import Album from "../../Components/Album/Album";
import Artistas from "../../Components/Artistas/Artistas";
import MenuReproduccion from "../../Components/MenuReproduccion/MenuReproduccion";
import Albumes from "../../Components/Albumes/Albumes";
import { Routes, Route } from "react-router-dom";

export default function Navegation({
  setCancionElegida,
  setCancionEs,
  cancionreproduccion,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MenuReproduccion
            setCancionElegida={setCancionElegida}
            setCancionEs={setCancionEs}
            cancionreproduccion={cancionreproduccion}
          />
        }
      />
      <Route path="Album/:ID" element={<Album />} />
      <Route path="Albumes" element={<Albumes />} />
      <Route path="Artistas" element={<Artistas />} />
    </Routes>
  );
}
