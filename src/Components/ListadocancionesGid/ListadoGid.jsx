import "./ListadoGid.css";
import Play from "../../assets/resource/icon/barradereproduccion/play.png";
import Imagen from "../../assets/resource/icon/imagenesdeprueba/imagen1.webp";
import URL from "../../Services/URL.js";

export default function ListadoGid({
  canciones,
  onCancionSeleccionada,
  activa,
}) {
  return (
    <ul className="ul">
      {canciones.map((cancion) => {
        const id = cancion.id;
        const titulo = cancion.titulo;
        const año = cancion.año || "Sin año";
        const duracion = cancion.duracion || "00:00";
        const nombre = cancion.artistaCompleto?.nombre || "Artista desconocido";
        const imagen = cancion.artistaCompleto?.imagen
          ? `${URL()}/${cancion.artistaCompleto.imagen}`
          : Imagen;

        return (
          <li key={id} className={`listmusic ${activa === id ? "active" : ""}`}>
            <button onClick={() => onCancionSeleccionada(id)}>
              {activa === id && (
                <img
                  src={Play}
                  alt="Reproduciendo"
                  className="iconoReproduccion"
                />
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
