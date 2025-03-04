// 14. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente.Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

let primero = new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 1000);
  }).then(function (rta) {
    console.log(rta);
    return rta + 1;
  }).then(function (rta) {
    console.log(rta);
    return rta + 4;
  }).then(console.log);