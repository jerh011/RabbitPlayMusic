import "./Listacanciones.css";

function Listacanciones({
  id,
  artistaNombre,
  canciontitulo,
  añoSalida,
  duracionCancion,
  onCancionSeleccionada 
}) {
  const nombre = artistaNombre?.nombre || artistaNombre; 
  return (
    <li className="listmusic">
      <button onClick={() => onCancionSeleccionada(id)}>
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
