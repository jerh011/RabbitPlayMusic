import URL from "./URL.js";

const GetCancionById = async (id) => {
  try {
    const response = await fetch(`${URL()}canciones/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al buscar la canción:", error);
    return null;
  }
};

export default GetCancionById;
