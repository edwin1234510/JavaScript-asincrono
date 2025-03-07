// 20. Crea un bucle que realice llamadas asincrónicas utilizando async / await para procesar una
// lista de elementos uno por uno.

function operacionAsincronica(valor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(valor);
    }, 1000);
  });
}

async function llamados(array) {
  for (let i = 0; i < array.length; i++) {
    let auxi = await operacionAsincronica(array[i]);
    console.log(auxi);
  }
}

const lista = [1, 8, 5, 4, 6];
llamados(lista);