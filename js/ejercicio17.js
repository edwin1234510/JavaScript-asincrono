// 17. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

async function llamar() {
  let arcJson = await fetch("../json/ejercicio17.json");
  let data = await arcJson.json();
  const informacion = data.filter((data) => data.edad > 18);
  console.log(informacion);
}
llamar();