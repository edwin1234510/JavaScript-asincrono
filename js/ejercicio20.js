// 20. Crea un bucle que realice llamadas asincrónicas utilizando async / await para procesar una
// lista de elementos uno por uno.

async function llamados(array) {
  for (let i = 0; i < array.length; i++) {
    let auxi = await array[i];
    console.log(auxi);
  }
}

const lista = [1, 8, 5, 4, 6];
llamados(lista)