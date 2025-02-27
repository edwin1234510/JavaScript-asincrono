/*3. Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• obtenga el resultado
• lo pushee a un nuevo array
• devuelva el array final con el resultado de cada una de las llamadas al callback.*/

function map (array, callback){
    let nuevo = [];
    for(let i = 0; i < array.length; i++ ){
        nuevo.push(callback(array[i]));
    }
    return nuevo;
}
let num = [1,2,3,4,5];
let rta = map(num,function(valor){
    return valor * 5;
});
console.log(rta);
