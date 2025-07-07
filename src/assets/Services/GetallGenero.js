import URL from "./URL.js"

async function  GetallGenero (){
try{
    const response=await fetch(URL()+"/api/estadisticas")
    const data=await response.json();
      console.log("errir",data)
    return  data.data.distribuccionGeneros
}catch(error){
    console.error(error)
    return null;
}
    
}
export default GetallGenero


/*
try {
    const response = await fetch(URL() + "/api/canciones");
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(error);
  }
} */