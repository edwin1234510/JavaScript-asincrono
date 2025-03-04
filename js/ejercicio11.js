// 11. Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa
// resuelta" cuando se cumpla.


let promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve("promesa resuelta");
    }, 3000);
  });
  promesa.then(alert);