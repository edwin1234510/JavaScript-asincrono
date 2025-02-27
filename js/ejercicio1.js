/*1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
  comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado.*/


function imprimirNumeros(desde, hasta) {
  let incrementa = setInterval(() => {
    console.log(desde);
    desde ++;
    if(desde > hasta){
      clearInterval(incrementa)
    }
  }, 1000);
  
}
imprimirNumeros(1,10);




/*function imprimirNumeros(desde, hasta) {
  function mostrar (){
    console.log(desde);
    if(desde < hasta){
      desde++;
      setTimeout(mostrar, 1000);
    }
  }
  mostrar()
}
imprimirNumeros(1,10);*/