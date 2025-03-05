// 19. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen.Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.
let promesa1 = new Promise(function (resulta, rechazada) {
  resulta("cumplio");
})
let promesa2 = new Promise(function (resuelta, rechazada) {
  resuelta("cumplio")
})
let promesa3 = new Promise(function (resulta, rechazada) {
  rechazada("no cumplio :(")
})
Promise.allSettled([promesa1, promesa2, promesa3]).then(value => {
  console.log(value);
});