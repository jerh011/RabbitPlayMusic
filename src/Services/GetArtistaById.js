import URL from "./URL.js";

async function GetArtistaById(id) {
  try {
    const response = await fetch(URL() + "/api/artistas/" + id);
    const data = await response.json();
    // alert(data.data);
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default GetArtistaById;
