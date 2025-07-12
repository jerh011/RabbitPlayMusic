import "./Barrabusqueda.css";
import lupa from "../../assets/resource/icon/busquedalista/buscar.png";
import { useEffect, useState } from "react";
import GetSongpornombre from "../../Services/GetSongpornombre.js";
/*busqueda automatica */
// function Barrabusqueda({ setcancionnombre }) {
//   const [nombre, setNombre] = useState("");

//   useEffect(() => {
//   if (nombre === "") {
//       setcancionnombre([]);
//       return;
//   }
//   const delayDebounce = setTimeout(() => {
//     const consulta = async () => {
//       try {

//         const busqueda = await GetSongpornombre(nombre);
//         setcancionnombre(busqueda);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     consulta();
//   }, 100);

//   return () => clearTimeout(delayDebounce);
// }, [nombre]);

//   const handleChange = (e) => {
//     const valor = e.target.value;

//     setNombre(valor);
//   };

//   return (
//     <div className="centrar-barabusqueda centrar">
//       <input
//         id="BuscarCanciones"
//         type="text"
//         placeholder="Buscar canciones"
//         className="BuscarCanciones"
//         value={nombre}
//         onChange={handleChange}
//       />
//       <button disabled>
//         <img src={lupa} alt=" BUSCAR" />
//       </button>
//     </div>
//   );
// }

//busqueda con boton
function Barrabusqueda({ setcancionnombre }) {
  const [nombre, setNombre] = useState("");

  const Inputbuscar = (e) => {
    setNombre(e.target.value);
  };

  useEffect(() => {
    const reload = () => {
      if (nombre.trim() === "") {
        setcancionnombre([]);
        return;
      }
    };
    reload();
  }, [nombre]);

  const BuscarBoton = async () => {
    if (nombre.trim() === "") {
      setcancionnombre([]);
      return;
    }

    try {
      const busqueda = await GetSongpornombre(nombre);
      setcancionnombre(busqueda);
    } catch (error) {
      console.error(error);
    }
  };

  const manejarTecla = (event) => {
    if (event.key === "Enter") {
      BuscarBoton();
    }
  };

  return (
    <div className="centrar-barabusqueda centrar">
      <input
        id="BuscarCanciones"
        type="text"
        placeholder="Buscar canciones"
        className="BuscarCanciones"
        value={nombre}
        onChange={Inputbuscar}
        onKeyDown={manejarTecla}
      />
      <button onClick={BuscarBoton}>
        <img src={lupa} alt="BUSCAR" />
      </button>
    </div>
  );
}

export default Barrabusqueda;
