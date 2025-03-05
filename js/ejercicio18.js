// 18. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
let promesa1 = new Promise(function (resolvida) {
  setTimeout(() => {
    resolvida("yap")
  }, 1000);
})
let promesa2 = new Promise(function (resolvida) {
  setTimeout(() => {
    resolvida("yap")
  }, 2000);
})
let promesa3 = new Promise(function (resolvida) {
  setTimeout(() => {
    resolvida("yap")
  }, 3000);
})
Promise.all([promesa1, promesa2, promesa3]).then(value => {
  console.log("se resolviron las tres promesas");
  console.log(value);
});