/*21. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo.*/

async function cargarJSON(url) {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      console.log("Datos cargados:", datos);
    } catch (error) {
      console.error("Error al cargar el archivo:", error);
    }
  }

  cargarJSON("../json/ejercicio21.json");