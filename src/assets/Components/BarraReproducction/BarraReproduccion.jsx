import "./BarraReproduccion.css";
import Play from "../../resource/icon/barradereproduccion/play.png";
import Pause from "../../resource/icon/barradereproduccion/pausa.png";
import Retroseso from "../../resource/icon/barradereproduccion/anterior.png";
import Siguiente from "../../resource/icon/barradereproduccion/siguiente.png";
import Regreso from "../../resource/icon/barradereproduccion/regreso.png";
import Barajar from "../../resource/icon/barradereproduccion/barajar.png";
import imagen1 from "../../resource/icon/imagenesdeprueba/imagen1.webp";
import URL from "../../Services/URL";
import VolumenImage from "../../resource/icon/barradereproduccion/volumen.png";
import GetCancionById from "../../Services/GetCancionById";
import { useState, useEffect } from "react";

function BarraReproducction({ cancionElegida }) {
  const [progreso, setProgreso] = useState(0);
  const [volumen, setVolumen] = useState(10);
  const [cancion, setCancion] = useState(null);
  const [playpause, setPlayPause] = useState("play");
  const [imagen, setImagen] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cancionElegida !== 0 && cancionElegida !== "") {
          const data = await GetCancionById(cancionElegida.toString());
          setCancion(data);
          // setImagen(URL() + data.artista.imagen);
        }
      } catch (error) {
        console.error("Error al cargar canción:", error);
      }
    };

    fetchData();
  }, [cancionElegida]);

  const handleProgreso = (e) => {
    setProgreso(e.target.value);
  };

  const handleVolumen = (e) => {
    setVolumen(e.target.value);
  };

  const togglePlayPause = () => {
    setPlayPause((prev) => (prev === "play" ? "pause" : "play"));
  };

  return (
    <>
      <div className="barradeArriba">
        <div className="BarradeReproduccionIzquierda">
          <div className="barraquierdaconteiner">
            <div className="barraquierdaconteiner-img">
              <img
                src={
                  cancion && Object.keys(cancion).length > 0
                    ? `${URL()}/${cancion.artista.imagen}`
                    : imagen1
                }
                alt="album"
              />
            </div>

            <div className="cancion-artista">
              <p className="scroll-text">{cancion?.titulo || "Sin título"}</p>
              <span>{cancion?.artista?.nombre || "Desconocido"}</span>
            </div>
          </div>
        </div>

        <div className="BarradeReproduccionCentral">
          <div className="BarraCentralConteiner">
            <div className="botones-repoduccion">
              <button className="botonessecundarios">
                <img src={Barajar} alt="botón barajar" />
              </button>
              <button className="botonessecundarios">
                <img src={Retroseso} alt="botón anterior" />
              </button>
              <button
                id={playpause === "play" ? "playbutton" : "pausebutton"}
                className="playpausebutton"
                onClick={togglePlayPause}
              >
                <img
                  src={playpause === "play" ? Play : Pause}
                  alt="botón de play/pausa"
                />
              </button>
              <button className="botonessecundarios">
                <img src={Siguiente} alt="botón siguiente" />
              </button>
              <button className="botonessecundarios">
                <img src={Regreso} alt="botón regreso" />
              </button>
            </div>
          </div>
        </div>

        <div className="BarradeReproduccionDerecha">
          <div className="barradevolumen">
            <img src={VolumenImage} alt="icono volumen" />
            <input
              type="range"
              className="barra"
              value={volumen}
              min="0"
              max="100"
              onChange={handleVolumen}
            />
          </div>
        </div>
      </div>
      <div className="barradeAbajo">
        <div className="barra-progreso">
          <span className="barraactual">00:00</span>
          <input
            type="range"
            className="barra"
            value={progreso}
            min={0}
            max={cancion?.duracion || "0:00"}
            onChange={handleProgreso}
          />
          <span className="tiemporeproduccion"></span>
          <span className="barraactual">{cancion?.duracion || "0:00"}</span>
          <span id="spanTimepototal" className="tiempototal"></span>
        </div>
      </div>
    </>
  );
}

export default BarraReproducction;
