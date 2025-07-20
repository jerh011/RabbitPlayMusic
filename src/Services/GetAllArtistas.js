import URL from "./URL.js";

async function GetAllArtistas() {
  try {
    const response = await fetch(URL() + "/api/artistas");
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default GetAllArtistas;
