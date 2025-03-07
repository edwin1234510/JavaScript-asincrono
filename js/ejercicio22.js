/*22. Crear un objeto proxy usando la clase Proxy*/

const persona = {
    nombre : "",
    apellido: ""
}

const manejador = {
    set(obj,prop,valor) {
        obj[prop] = valor;
    }
}

const proxy = new Proxy(persona,manejador)
proxy.nombre = "edwin";
proxy.apellido = "villabona";
proxy.edad = 18;

console.log(proxy);

