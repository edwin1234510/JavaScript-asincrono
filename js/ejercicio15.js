//15. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
//obtenidos en la consola.
fetch("../json/ejercicio15.json").then(function (data) {
  // console.log(data);
  const rta = data.json().then(function (datos) {
    console.log(datos);

  })
  // console.log(rta);
});

