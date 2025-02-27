/*4. Crear una función filter que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• sí dicho callback devuelve true, pushea el elemento a un nuevo array
• devuelva el array final con los elementos que pasaron el "filtro".*/

function filter (array,callback){
    let nuevo = [];
    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) == true){
            nuevo.push(array[i])
        }
    }
    return nuevo
}
let numeros = [8,-4,1,-9,7,-6,5];
let proceso = filter(numeros,function(num){
    return num > 0;
})
console.log(proceso);

