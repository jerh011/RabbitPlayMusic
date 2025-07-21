import "./ListadoCanciones.css";
export default function listadoCanciones({ canciones, album }) {
  album = album ? album : false;
  return (
    <>
      <div className="song-list-header">
        <div>#</div>
        <div>Título</div>
        {album ? <div>Álbum</div> : null}
        <div>Año</div>
        <div>Duración</div>
      </div>
      {canciones.map((cancion) => (
        <div className="song-row">
          <div>{cancion.pista}</div>
          <div>{cancion.titulo}</div>
          {album ? <div>{album}</div> : null}
          <div>{cancion.año}</div>
          <div>{cancion.duracion}</div>
        </div>
      ))}
    </>
  );
}
