import URL from "./URL.js";

async function GetArtistaById(id) {
  try {
    const response = await fetch(URL() + "artistas/" + id);
    const data = await response.json();
    // alert(data.data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default GetArtistaById;
