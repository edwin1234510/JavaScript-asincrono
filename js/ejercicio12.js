// 12. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada".Utiliza async / await.

async function x(segundos) {
    let promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve("operacion completa");
      }, segundos);
    });
    let rta = await promesa;
    alert(rta);
  }
  x(1000);