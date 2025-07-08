import "./Listacanciones.css";
import Play from "../../resource/icon/barradereproduccion/play.png"
function Listacanciones({
  id,
  artistaNombre,
  canciontitulo,
  añoSalida,
  duracionCancion,
  onCancionSeleccionada,
  activa,
  artista
}) {
  
    const nombre =artistaNombre?.nombre || artista || "Artista desconocido";
  
  return (
    <li className={`listmusic ${activa ? "active" : ""}`}>
      <button onClick={() => onCancionSeleccionada(id)}>
        {activa && <img src={Play} className="iconoReproduccion"/>}
        <div className="cancioheder">
          <p className="nombreCancion">{canciontitulo}</p>
          <p className="nombreartista">{nombre}</p>
        </div>
        <div className="listaspan">
          <span className="salida">{añoSalida}</span>
          <span className="tiempo">{duracionCancion}</span>
        </div>
      </button>
    </li>
  );
}

export default Listacanciones;
