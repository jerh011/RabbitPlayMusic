import { useState, useEffect } from 'react';
import GetallGenero from '../../Services/GetallGenero';
import "./Dashboardconteiner.css"
function Dashboardconteiner() {
    const [generos,Setgeneros]=useState([]);
    
    useEffect(()=>{
        const LoadGenero= async()=>{

            try{
                const response=await GetallGenero();
                
                const generosArray=Object.entries(response);
                Setgeneros(generosArray);
            }catch(error){
                console.error("Error al buscar las canciónes:", error);
                return null;
            }
        }
        LoadGenero();
    },[]);
 
    return (
        <div className="generos">

            <ul>
                   {generos.map(([nombre, cantidad], index) => (
                    <li key={index}>
                        <button>{nombre} ({cantidad})</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}



export default Dashboardconteiner