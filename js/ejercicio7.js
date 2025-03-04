// 7. Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

function find(array, callback) {
    let rta;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i]) == true) {
        rta = array[i];
        break;
      }
    }
    return rta;
  }
  let numeros = [2, 7, -8, 1];
  let proceso = find(numeros, function (num) {
    if (num < 0) {
      return true;
    }
    else {
      return false;
    }
  });
  console.log(proceso);