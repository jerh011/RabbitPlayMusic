import "./ListadoCanciones.css";
export default function listadoCanciones({ canciones, datos }) {
  return (
    <>
      <div className="song-list-header">
        <div>#</div>
        <div>Título</div>
        <div>Álbum</div>
        <div>Año</div>
        <div>Duración</div>
      </div>
      {canciones.map((cancion) => (
        <div className="song-row">
          <div>{cancion.pista}</div>
          <div>{cancion.titulo}</div>
          <div>{datos.titulo}</div>
          <div>{cancion.año}</div>
          <div>{cancion.duracion}</div>
        </div>
      ))}
    </>
  );
}
2;
