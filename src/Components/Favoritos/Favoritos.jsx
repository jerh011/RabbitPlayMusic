import "./Favoritos.css";
import { useState } from "react";
import ListadoCanciones from "../ListadoCancioones/ListadoCanciones";
export default function Favoritos() {
  const [cancionesFav, setCancionesFav] = useState([]);
  return (
    <div className="favoritos-container">
      <h1>Favoritos</h1>
      {cancionesFav.length === 0 ? (
        <p>No hay canciones favoritas aún.</p>
      ) : (
        <ListadoCanciones canciones={cancionesFav} />
      )}
    </div>
  );
}
