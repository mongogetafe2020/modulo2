// Operadores aritméticos

// + - * /

let resultado = 'Hello!';

let total = resultado * 2; // NaN

// Resto %

let a = 13 % 2;

// Incremento ++

let b = 1;

console.log(b++);
console.log(b);

let c = 1;

console.log(++c);
console.log(c);

// Decremento --

// Negación unaria

let d = 4;

let e = -d;

// Concatenación con el operador +

let nombre = 'Juan';
let apellidos = 'Pérez Gónzalez';

let mensaje = nombre + ' ' + apellidos;
console.log(mensaje);

let edad = 46;

mensaje = nombre + ' tiene ' + edad + ' años.';
console.log(mensaje);

// Precendencia de operaciones
// De izquierda a derecha y las mismas precendecias
// que en operaciones matemáticas

let aa = (12 + 3) * 8;

// Operadores de asignación

// igual =

// Asignación de adicción +=

let f = 4;
let g = 10;

f += g; // f = f + g;

// Asignación de sustracción -=

f -= g; // f = f - g;

// Asignación de multiplación *=
//     "      de división /=
//     "      de resto %=

// Operadores de comparación

// Igualdad ==

let ciudad = 'Getafe';
let termino = 'Getafe';

let hayRespuesta = ciudad == termino;
console.log(hayRespuesta);

// Igualdad estricta ===

let puntuacion1 = 8.4;
let puntuacion2 = '8.4';

total = puntuacion1 === puntuacion2;
console.log(total);

// desigualdad !=

// desigualdad estricta !== 

// Mayor que >

let h = 12;
let i = 10;

let superado = h > i;
console.log(superado);

// Mayor o iguak >=

// Menor <

// Menor <=

// Operadores lógicos

// And lógico &&

let valor1 = 12;
let valor2 = 14;
let valor3 = 12;

resultado = valor2 < valor1 && valor1 === valor3;
console.log(resultado);

// Or lógico ||

resultado = valor2 < valor1 || valor1 === valor3;
console.log(resultado);

// Not !

let mayorEdad = false;

mayorEdad = !mayorEdad;
console.log(mayorEdad);

// Operador condicional (ternario)

edad = 17;

mayorEdad = (edad >= 18) ? 'Adulto' : 'Menor';
console.log(mayorEdad);











