// 8. Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

function findIndex(array, callback) {
    let rta;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i]) == true) {
        rta = "el indice del elemento es :" + i;
        break;
      }
    }
    return rta;
  }
  let numeros = [2, 8, 50, 42];
  let proceso = findIndex(numeros, function (num) {
    if (num % 5 == 0) {
      return true;
    }
    else {
      return false;
    }
  });
  console.log(proceso);