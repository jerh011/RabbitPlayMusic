import "./Barrabusqueda.css"
import lupa from "../../resource/icon/busquedalista/buscar.png"
import { useEffect,useState } from "react";
import GetSongpornombre from "../../Services/GetSongpornombre.js";
function Barrabusqueda(){
    const [nombre, setNombre] = useState("");

    useEffect(()=>{
        const consulta=async()=>{
            try{
                if(nombre==="")return
                const busqueda = await GetSongpornombre(nombre);    
                console.log("barra de busqueda",busqueda);            
            }catch(error){
                console.error(error);
            }
        }
        consulta()
    },[nombre])
  
   
    const handleChange = (e) => {
        const valor=e.target.value;
        setNombre(valor);
       
  };


    
return(
    <div className="centrar-barabusqueda centrar">

       <input id="BuscarCanciones" 
             type="text" 
             placeholder="Buscar canciones" 
             className="BuscarCanciones"
            value={nombre}
            onChange={handleChange}/>
          <button onClick="si">
                <img  
                src={lupa} 
                alt=" BUSCAR"/>
             </button>

            
    </div>  
)
}
//Something
export default Barrabusqueda