import URL from "../../Services/URL";
import "./Albumes.css";
function Albumes() {
  return (
    <div className="album-page ">
      <div className="album-header">
        <img
          className="album-cover"
          src={`${URL()}/media/abbey-road.jpg`}
          alt="Portada del álbum Abbey Road"
        />
        <div className="album-descripcion">
          <span className="album-type">Álbum</span>
          <h1 className="album-title">Abbey Road</h1>
          <p className="album-descripcion">The Beatles • 1969</p>
        </div>
      </div>

      <div className="song-list-header">
        <div>#</div>
        <div>Título</div>
        <div>Álbum</div>
        <div>Fecha</div>
        <div>Duración</div>
      </div>

      <div className="song-row">
        <div>1</div>
        <div>Come Together</div>
        <div>Abbey Road</div>
        <div>10 jul 2025</div>
        <div>4:20</div>
      </div>
    </div>
  );
}

export default Albumes;
