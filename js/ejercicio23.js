/*23. Usar un proxy para la validación de los valores de propiedades
        • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
        números
        • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
        letras
        • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
        correos
        • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
        fechas
        • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
        al final de estos y se debe mostrar el error personalizado por consola*/

const objeto = {}

const manejador = {
    set(prop,atri,valor){
        if (typeof valor === "string" && valor.trim() !== valor) {
            console.error(`Error: El atributo '${atri}' no puede tener espacios al inicio o al final.`);
            return false;
        }
        switch (atri){
            case "edad":
                if(typeof(valor) == "number"){
                    prop[atri] = valor;
                }else{
                    console.log("- solo se permite numeros en edad");
                }
                break;
            case "nombre":
                if(typeof(valor) == "string"){
                    prop[atri] = valor;
                }else{
                    console.log("- solo se permite letras en nombre");
                }
                break;
            case "email":
                const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if(regexEmail.test(valor)){
                    prop[atri] = valor;
                }
                else{
                    console.log("- solo se permite correos electronicos validos");
                }
                break;
            case "fecha":
                const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
                if(regexFecha.test(valor)){
                    prop[atri] = valor;
                }
                else{
                    console.log("- solo se permite fechar año/mes/dia");
                }
        }
        
    }   
}

const proxy = new Proxy(objeto,manejador);
proxy.edad = 18;
proxy.nombre = "edwin";
proxy.email = "edwinvillabona0701@gmail.com";
proxy.fecha = "2006-07-01"

console.log(proxy);
