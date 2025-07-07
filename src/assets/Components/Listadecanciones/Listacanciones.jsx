import "./Listacanciones.css";

function Listacanciones({
  id,
  artistaNombre,
  canciontitulo,
  añoSalida,
  duracionCancion,
  onCancionSeleccionada,
  activa,
}) {
  const nombre = artistaNombre?.nombre || artistaNombre;

  return (
    <li className={`listmusic ${activa ? "active" : ""}`}>
      <button onClick={() => onCancionSeleccionada(id)}>
        {activa && <span className="iconoReproduccion">▶️</span>}
        <div className="cancioheder">
          <p className="nombreartista">{nombre}</p>
          <p className="nombreCancion">{canciontitulo}</p>
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
