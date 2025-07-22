import "./Favoritos.css";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import ListadoCanciones from "../ListadoCanciones/ListadoCanciones";

export default function FavoritosC() {
  const [cancionesFav, setCancionesFav] = useState([]);

  const {
    setCancionElegida,
    setCancionEs,
    cancionreproduccion,
    AgregarCancionFavorita,
    Favoritos,
  } = useOutletContext();

  useEffect(() => {
    setCancionesFav(Favoritos);
  }, [Favoritos]);

  const onCancionSeleccionada = (id) => {
    setCancionElegida(id);
  };
  const onPlay = () => {
    setCancionElegida(cancionesFav[0]?.id || 1);
    setCancionEs(cancionesFav);
  };
  return (
    <>
      <HeaderInfo
        titulo="Favoritos"
        añoLanzamiento=""
        nombre="Tus Canciones Favoritas"
        etiqueta="Favoritos"
        onPlay={onPlay}
      />
      <div className="favoritos-container">
        {cancionesFav.length === 0 ? (
          <p>No hay canciones favoritas aún.</p>
        ) : (
          <ListadoCanciones
            canciones={cancionesFav}
            activa={cancionreproduccion}
            onCancionSeleccionada={onCancionSeleccionada}
            AgregarCancionFavorita={AgregarCancionFavorita}
            Favoritos={Favoritos}
          />
        )}
      </div>
    </>
  );
}
