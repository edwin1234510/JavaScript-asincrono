// 9. ¿Cuál es el resultado del código a continuación ?
let i = 0;
setTimeout(() => alert(i), 100);
for (let j = 0; j < 100000000; j++) {
  i++;
}
//rta = se mostrara como resultado 100000000, porque setTimeout es una funcion
//asincrona y pasa al event loop saliendo del codigo que se esta ejecutando sincronicamente
//de esta manera se seguira ejecutando el bucle y luego se mostrara el resultado de la 
//funcion setTimeout 