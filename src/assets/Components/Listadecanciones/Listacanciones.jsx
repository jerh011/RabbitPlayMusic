import "./Listacanciones.css"
function Listacanciones({artistaNombre,canciontitulo,añoSalida,duracionCancion}) {
  const nombre=artistaNombre.nombre;
  return (
    <li  className="listmusic">
      <div className="cancioheder">
        <p className="nombreartista">{nombre}</p>
        <p className="nombreCancion">{canciontitulo}</p>
      </div>
      <div className="listaspan">
        <span className="reproducciones">reproducciones</span>
        <span className="salida">{añoSalida}</span>
        <span className="tiempo">{duracionCancion}</span>
      </div>
    </li>
  );
}
export default Listacanciones;
