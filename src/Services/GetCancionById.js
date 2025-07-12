import URL from "./URL"

const GetCancionById= async (id) => {
  try {
    const response = await fetch(
      `${URL()}/api/canciones/${id}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error al buscar la canción:", error);
    return null;
  }
};

export default GetCancionById;