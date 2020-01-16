//Sintaxis de declaración

// function nombreFuncion (paramétros) {
    // código que ejecuta la función
    // return lo que devuelva
// }

function suma(a, b) {
    console.log(a + b);
}  

function multiplicacion(a, b) {
    let c = a * b;
    return c;
}

// Sintaxis de invocación

// nombreFuncion(argumentos);

suma(3,5);
let resultado = multiplicacion(2,5);
console.log(resultado);

// Funciones anónimas

let cuadrado = function(a) {
    return a*a;
}

console.log(cuadrado(5));

// Funciones flecha ECMAScript 5

// let cubo = (a) => {
//     return a * a * a;
// }

let cubo = a => a * a * a;

console.log(cubo(10));

setTimeout(()=>{
    console.log('Hola Mundo a los 2 seg');
}, 2000);

// Callbacks

let seconds = 10;

function countDown(onTimeChanged) {
    setInterval(()=>{
        if (seconds > 0) {
            --seconds;
            onTimeChanged();
        }
    }, 1000);
}

function showSeconds() {
    console.log(seconds);
}

function mostrarSegundos() {
    console.log('-' + seconds);
}

// countDown(mostrarSegundos);

// Ámbito de las variables y constantes

// Ámbito de las variables declaradas con var
// es el de la función más próxima

function mayorEdad(edad) {
    if (edad >= 18) {
        var adulto = true;
    } else {
        var adulto = false;
    }
    var nombre = 'Pepe';
    console.log(adulto);
}

mayorEdad(40);
// console.log(nombre); error

// Ámbito de las variables declaradas con let
// será el del bloque de código más próximo
// *bloque puede ser estructura o función

function setPuntuacion(puntuacion) {
    if (puntuacion >= 5) {
        let apto = true;
    } else {
        let apto = false;
        console.log(apto);
    }
    // console.log(apto); error
}

setPuntuacion(3);

// Variables globales

function triangulo(a, b) {
    area = 0.5 * a * b;
}

triangulo(2,4);
console.log(area);



