import "./ListadoCanciones.css";
import Imagen from "../../assets/resource/icon/imagenesdeprueba/imagen1.webp"; // Imagen por defecto
import IconoPlay from "../../assets/resource/icon/barradereproduccion/play.png"; // ← usa una imagen si prefieres

export default function ListadoCanciones({
  canciones,
  album = false,
  activa,
  onCancionSeleccionada,
  Favoritos = [],
  AgregarCancionFavorita,
}) {
  const Fav = (id) => {
    return Favoritos.some((cancion) => cancion.id === id);
  };
  return (
    <>
      <div className={`song-list-header ${album ? "album" : "no-album"}`}>
        <div></div> {/* Columna para el botón play */}
        <div>Título</div>
        {album && <div>Álbum</div>}
        <div>Año</div>
        <div>Duración</div>
      </div>

      {canciones.map((cancion) => {
        const imagen =
          cancion.imagen || cancion.artistaCompleto?.imagen || Imagen;

        return (
          <div
            key={cancion.id}
            className={`song-row ${album ? "album" : "no-album"} ${
              activa === cancion.id ? "active" : ""
            }`}
            onClick={() => onCancionSeleccionada(cancion.id)}
          >
            <div className="fav-icon">
              <svg
                onClick={(e) => {
                  e.stopPropagation(); // Previene que se seleccione la canción al dar clic en el ícono
                  AgregarCancionFavorita(cancion);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill={Fav(cancion.id) ? "#FFFFFF" : "none"} // ← esto vuelve a activar la lógica de favorito
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FFFFFF"
                className="favoritos-listado"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div>{cancion.titulo}</div>
            {album && <div>{album}</div>}
            <div>{cancion.año}</div>
            <div>{cancion.duracion}</div>
          </div>
        );
      })}
    </>
  );
}
