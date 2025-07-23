import "./BarraReproduccion.css";
import Play from "../../assets/resource/icon/barradereproduccion/play.png";
import Pause from "../../assets/resource/icon/barradereproduccion/pausa.png";
import Retroseso from "../../assets/resource/icon/barradereproduccion/anterior.png";
import Siguiente from "../../assets/resource/icon/barradereproduccion/siguiente.png";
import Regreso from "../../assets/resource/icon/barradereproduccion/regreso.png";
import Regresowhite from "../../assets/resource/icon/barradereproduccion/regreso-white.png";
import Barajar from "../../assets/resource/icon/barradereproduccion/barajar.png";
import VolumenImage from "../../assets/resource/icon/barradereproduccion/volumen.png";
import imagen1 from "../../assets/resource/icon/imagenesdeprueba/imagen1.webp";
import URL from "../../Services/URL";
import GetCancionById from "../../Services/GetCancionById.js";
import { useState, useEffect, useRef } from "react";
import audio from "../../assets/aud/audio.mp3";

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
  const [duracionTotal, setDuracionTotal] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPlayPause(true);
        const data = await GetCancionById(cancionElegida);
        setCancion(data);
        setProgreso(0);

        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.volume = volumen / 100;
          audioRef.current.play().catch(() => {});
        }

        if (data?.duracion && typeof data.duracion === "string") {
          const [min, seg] = data.duracion.split(":").map(Number);
          setDuracionTotal(min * 60 + seg);
        }
      } catch (error) {
        console.error("Error al cargar canción:", error);
      }
    };

    if (cancionElegida !== null) {
      fetchData();
    }
  }, [cancionElegida]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playpause) {
      audioRef.current
        .play()
        .catch((err) => console.error("Error al reproducir:", err));
    } else {
      audioRef.current.pause();
    }
  }, [playpause]);

  const handleProgreso = (e) => {
    const nuevoTiempo = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = nuevoTiempo;
    }
    setProgreso(nuevoTiempo);
  };

  const handleVolumen = (e) => {
    const nuevoVolumen = Number(e.target.value);
    setVolumen(nuevoVolumen);
    if (audioRef.current) {
      audioRef.current.volume = nuevoVolumen / 100;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgreso(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuracionTotal(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    if (replay) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      onSiguiente();
    }
  };

  const togglePlayPause = () => setPlayPause((prev) => !prev);

  const formatoDuracion = (segundos) => {
    if (isNaN(segundos) || segundos < 0) return "0:00";
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? "0" : ""}${seg}`;
  };

  const onRepetir = () => {
    SetReplay(!replay);
    setRepetir(!replay);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

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
              <button className="botonessecundarios" onClick={onAnterior}>
                <img src={Retroseso} alt="botón anterior" />
              </button>
              <button
                id={playpause ? "playbutton" : "pausebutton"}
                className="playpausebutton"
                onClick={togglePlayPause}
              >
                <img
                  src={!playpause ? Play : Pause}
                  alt="botón de play/pausa"
                />
              </button>
              <button className="botonessecundarios" onClick={onSiguiente}>
                <img src={Siguiente} alt="botón siguiente" />
              </button>
              <button className="botonessecundarios" onClick={onRepetir}>
                <img
                  src={replay ? Regresowhite : Regreso}
                  className={replay ? "Regresowhite" : "Regreso"}
                  alt="botón repetir"
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
            />
          </div>
        </div>
      </div>

      <div className="barradeAbajo">
        <div className="barra-progreso">
          <span className="barraactual">{formatoDuracion(progreso)}</span>
          <input
            type="range"
            className="barra"
            value={progreso}
            min={0}
            max={duracionTotal}
            onChange={handleProgreso}
          />
          <span className="barraactual">{formatoDuracion(duracionTotal)}</span>
        </div>
      </div>
    </>
  );
}

export default BarraReproduccion;
