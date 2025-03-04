// 5. Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

function every(array, callback) {
    let rta = true;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i]) == false) {
        rta = false;
      }
    }
    return rta;
  }
  let pares = [6, 8];
  let proceso = every(pares, function (num) {
    if ((num % 2) == 0) {
      return true;
    }
    else {
      return false;
    }
  });
  console.log(proceso);