// 16. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios(por ejemplo,
//   mostrar solo los nombres que comiencen con "A").


fetch("../json/ejercicio16.json").then(function (data) {
  const rta = data.json().then(function (datos) {
    const palabra = datos.filter((datos) => datos.nombre[0] == "e");
    console.log(palabra);
  })
});

