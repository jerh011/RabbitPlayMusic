import "./ListadoGid.css";
import Play from "../../assets/resource/icon/barradereproduccion/play.png";
import Imagen from "../../assets/resource/icon/imagenesdeprueba/imagen1.webp";
import URL from "../../Services/URL.js";

export default function ListadoGid({
  canciones,
  onCancionSeleccionada,
  activa,
  AgregarCancionFavorita,
  Favoritos = [],
}) {
  const Fav = (id) => {
    return (
      Array.isArray(Favoritos) && Favoritos.some((cancion) => cancion.id === id)
    );
  };

  return (
    <ul className="ul">
      {canciones.map((cancion) => {
        const id = cancion.id;
        const titulo = cancion.titulo;
        const año = cancion.año || "Sin año";
        const duracion = cancion.duracion || "00:00";
        const nombre = cancion.artistaCompleto?.nombre || "Artista desconocido";
        const imagen = cancion.artistaCompleto?.imagen
          ? `${URL()}${cancion.artistaCompleto.imagen}`
          : Imagen;

        return (
          <li key={id} className={`listmusic ${activa === id ? "active" : ""}`}>
            <button onClick={() => onCancionSeleccionada(id)}>
              {activa === id && (
                <svg
                  onClick={() => AgregarCancionFavorita(cancion)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={Fav(cancion.id) ? "#FFFFFF" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#FFFFFF"
                  className="iconoReproduccion"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              )}

              <img
                src={imagen}
                alt="Portada del artista"
                className="imagen-portada"
              />

              <div className="cancioheder">
                <div className="artistacacancion">
                  <p className="nombreCancion">{titulo}</p>
                  <p className="nombreartista">{nombre}</p>
                </div>
                <div className="listaspan">
                  <span className="salida">{año}</span>
                  <span className="tiempo">{duracion}</span>
                </div>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
