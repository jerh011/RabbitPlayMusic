import URL from "./URL.js";

async function GetallGenero() {
  try {
    const response = await fetch(URL() + "generos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export default GetallGenero;

/*
try {
    const response = await fetch(URL() + "/api/canciones");
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(error);
  }
} */
