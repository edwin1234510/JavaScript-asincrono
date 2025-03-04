// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

function some(array, callback) {
    let rta = false;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i]) == true) {
        rta = true;
      }
    }
    return rta;
  }
  let numeros = [1, 7, 6];
  let proceso = some(numeros, function (num) {
    if ((num % 3) == 0) {
      return true;
    }
    else {
      return false;
    }
  });
  console.log(proceso);