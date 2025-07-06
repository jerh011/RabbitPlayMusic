import URL from "./URL.JS";

const GetSongpornombre = async (nombre) => {
  try {
    const response = await fetch(
      `${URL()}/api/canciones?q=${nombre}`
    );
    const data = await response.json();
  
    console.log("ncanciones",data.data.canciones);
    return data.data.canciones;
  } catch (error) {
    console.error("Error al buscar la canción:", error);
    return null;
  }
};

export default GetSongpornombre;