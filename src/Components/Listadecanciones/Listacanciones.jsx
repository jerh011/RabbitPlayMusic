import "./Listacanciones.css";
import Play from "../../assets/resource/icon/barradereproduccion/play.png";
import Imagen from "../../assets/resource/icon/imagenesdeprueba/imagen1.webp";
import URL from "../../Services/URL.js";

function Listacanciones({
  id,
  artistaCompleto,
  canciontitulo,
  añoSalida,
  duracionCancion,
  onCancionSeleccionada,
  activa,
  artista,
}) {
  const nombre = artistaCompleto?.nombre || artista || "Artista desconocido";
  const imagen = artistaCompleto?.imagen
    ? `${URL()}/${artistaCompleto.imagen}`
    : Imagen;

  return (
    <li className={`listmusic ${activa ? "active" : ""}`}>
      <button onClick={() => onCancionSeleccionada(id)}>
        {activa && (
          <img src={Play} alt="Reproduciendo" className="iconoReproduccion" />
        )}

        <img
          src={imagen}
          alt="Portada del artista"
          className="imagen-portada"
        />

        <div className="cancioheder">
          <p className="nombreCancion">{canciontitulo}</p>
          <p className="nombreartista">{nombre}</p>
          <div className="listaspan">
            <span className="salida">{añoSalida}</span>
            <span className="tiempo">{duracionCancion}</span>
          </div>
        </div>
      </button>
    </li>
  );
}

export default Listacanciones;
