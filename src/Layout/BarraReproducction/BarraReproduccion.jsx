import "./BarraReproduccion.css";
import Play from "../../assets/resource/icon/barradereproduccion/play.png";
import Pause from "../../assets/resource/icon/barradereproduccion/pausa.png";
import Retroseso from "../../assets/resource/icon/barradereproduccion/anterior.png";
import Siguiente from "../../assets/resource/icon/barradereproduccion/siguiente.png";
import Regreso from "../../assets/resource/icon/barradereproduccion/regreso.png";
import Regresowhite from "../../assets/resource/icon/barradereproduccion/regreso-white.png";
import Barajar from "../../assets/resource/icon/barradereproduccion/barajar.png";
import VolumenImage from "../../assets/resource/icon/barradereproduccion/volumen.png"; // <-- Asegúrate de importar este ícono
import imagen1 from "../../assets/resource/icon/imagenesdeprueba/imagen1.webp";
import URL from "../../Services/URL";
import GetCancionById from "../../Services/GetCancionById";
import { useState, useEffect } from "react";

function BarraReproduccion({
  cancionElegida,
  cancionES,
  onSiguiente,
  onAnterior,
  setRepetir,
}) {
  const [progreso, setProgreso] = useState(0);
  const [volumen, setVolumen] = useState(10);
  const [cancion, setCancion] = useState(null);
  const [playpause, setPlayPause] = useState(false);
  const [replay, SetReplay] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      {
        cancionElegida != null || cancionES != null
          ? setPlayPause(false)
          : setPlayPause(true);
      }

      try {
        const data = await GetCancionById(cancionElegida);
        setCancion(data);
        setProgreso(0);
      } catch (error) {
        console.error("Error al cargar canción:", error);
      }
    };

    fetchData();
  }, [cancionElegida, cancionES]);

  const handleProgreso = (e) => setProgreso(Number(e.target.value));
  const handleVolumen = (e) => setVolumen(Number(e.target.value));
  const togglePlayPause = () =>
    setPlayPause((prev) => (prev === true ? false : true));

  const formatoDuracion = (duracion) => {
    if (!duracion) return "0:00";
    if (typeof duracion === "string" && duracion.includes(":")) return duracion;

    const segundos = Number(duracion);
    if (isNaN(segundos)) return "0:00";

    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${min}:${seg < 10 ? "0" : ""}${seg}`;
  };
  const onRepetir = () => {
    SetReplay(!replay);
    setRepetir(!replay);
  };
  return (
    <>
      <div className="barradeArriba">
        <div className="BarradeReproduccionIzquierda">
          <div className="barraquierdaconteiner">
            <div className="barraquierdaconteiner-img">
              <img
                src={
                  cancion?.artista?.imagen
                    ? `${URL()}/${cancion.artista.imagen}`
                    : imagen1
                }
                alt="Portada álbum o artista"
              />
            </div>

            <div className="cancion-artista">
              <p className="scroll-text">{cancion?.titulo || "Sin título"}</p>
              <div className="artista-nombre-barra">
                <span>{cancion?.artista?.nombre || "Desconocido"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="BarradeReproduccionCentral">
          <div className="BarraCentralConteiner">
            <div className="botones-repoduccion">
              <button className="botonessecundarios" aria-label="Barajar">
                <img src={Barajar} alt="botón barajar" />
              </button>
              <button
                className="botonessecundarios"
                onClick={onAnterior}
                aria-label="Anterior"
              >
                <img src={Retroseso} alt="botón anterior" />
              </button>
              <button
                id={playpause === true ? "playbutton" : "pausebutton"}
                className="playpausebutton"
                onClick={togglePlayPause}
                aria-label={playpause === true ? "Reproducir" : "Pausar"}
              >
                <img
                  src={playpause === true ? Play : Pause}
                  alt="botón de play/pausa"
                />
              </button>
              <button className="botonessecundarios" onClick={onSiguiente}>
                <img src={Siguiente} alt="botón siguiente" />
              </button>
              <button
                className="botonessecundarios"
                onClick={() => onRepetir()}
              >
                <img
                  src={replay === true ? Regresowhite : Regreso}
                  className={replay === true ? "Regresowhite" : "Regreso"}
                  alt="botón regreso"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="BarradeReproduccionDerecha">
          <div className="barradevolumen">
            <img src={VolumenImage} alt="Icono volumen" />
            <input
              type="range"
              className="barra"
              value={volumen}
              min={0}
              max={100}
              onChange={handleVolumen}
              aria-label="Control de volumen"
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
            max={cancion?.duracionSegundos || 0} // asumiendo duración en segundos
            onChange={handleProgreso}
            aria-label="Control de progreso"
          />
          <span className="tiemporeproduccion"></span>
          <span className="barraactual">
            {formatoDuracion(cancion?.duracion)}
          </span>
          <span id="spanTimepototal" className="tiempototal"></span>
        </div>
      </div>
    </>
  );
}

export default BarraReproduccion;
