/*2. En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
pesado que demora más de 100 ms en finalizar.
¿Cuándo se ejecutará la función programada y por qué se ejecutará?
a) Después del bucle.
b) Antes del bucle.
c) Al comienzo del bucle.
¿Qué va a mostrar alert()?*/

let i = 0;
setTimeout (()=> alert(i),100);
for(let j = 0; j < 1000000000; j++){
    i++;
}

//rta: a) Después del bucle.
//la funcion promada se ejecutara despeus del bucle ya que pasa al
//event loop (mecanismo que se encarga de ejecutar tareas asíncronamente, es 
//decir, sin bloquear la ejecución del programa) luego de ejecutarse el bucle
//y incrementar la variable i, la funcion nos mostrara despues de 100 ms por medio del 
//alert el valor de la variable i que en este caso es = 1000000000.