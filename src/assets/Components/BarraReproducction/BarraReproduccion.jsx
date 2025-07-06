import "./BarraReproduccion.css"
import Play from "../../resource/icon/barradereproduccion/play.png"
import Pause from "../../resource/icon/barradereproduccion/pausa.png"
import Retroseso from "../../resource/icon/barradereproduccion/anterior.png"
import Siguiente from "../../resource/icon/barradereproduccion/siguiente.png"
import Regreso from "../../resource/icon/barradereproduccion/regreso.png"
import Barajar from "../../resource/icon/barradereproduccion/barajar.png"
import { useState } from 'react';

function BarraReproducction() {
 const [value, setValue] = useState(50); // Valor inicial
 const [playpause,setPlayPause]=useState("play");
  const handleChange = (e) => {
    setValue(e.target.value); // Actualiza el estado con el nuevo valor
  };

    const PausePlayState = () => {
    setPlayPause(prev => (prev === "play" ? "pause" : "play"));
  };
    return (
        <>
           <div className="DatosDeRepdocucion centrar"> 
                <span id="NombreDeCancion">asdasdasdasdasdasdasd</span> 
                <span>de</span> 
                <span id="NombreArtista">artista</span>
            </div>
            <div className="barradeprogreso">
                <input type="range" className="barra"  value={value}  min="0" max="100"  onChange={handleChange}  ></input>
                <span className="tiemporeproduccion"></span>
                <span className="barraactual">&nbsp/&nbsp</span>
                <span  id="spanTimepototal" className="tiempototal"></span>
            </div>

            <div className="botones centrar">
                <button className="botonessecundarios botonesbarradereproduccion">
                    <img src={Barajar} alt="botton siguiente"/>
                </button>
                <button className="botonessecundarios botonesbarradereproduccion">
                    <img src={Retroseso} alt="botton siguiente"/>
                </button>
                <button id={playpause==="play"? "playbutton":"pausebutton"} className="playpausebutton botonesbarradereproduccion" 
                        onClick={PausePlayState}>
                    <img src={playpause==="play"? Play:Pause} alt="botón de play"/>
                </button>
                
                <button className="botonessecundarios botonesbarradereproduccion">
                    <img src={Siguiente} alt="botton siguiente"/>
                </button>
                <button className="botonessecundarios botonesbarradereproduccion">
                    <img src={Regreso} alt="botton siguiente"/>
                </button>
            </div>


        </>
    )
}

export default BarraReproducction