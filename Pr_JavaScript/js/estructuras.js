// Estructura condicional if

// if (condición) {
//         código a ejecutar si cumple
// }

let nombre = 'Laura';
let edad = 20;
let mayorEdad;

if (edad >= 18 && nombre !== undefined) {
    mayorEdad = true;
    console.log(nombre + ' es mayor de edad');
}

// Estructura condicional if else

// if (condición) {
//         código a ejecutar si cumple
// } else {
        // código a ejecutar si no se cumple
// }

let a = 10;
let b = 20;

if (a > b) {
    console.log('a es mayor que b');
} else if (a === b) {
    console.log('a es igual a b');
} else {
    console.log('a es menor que b');
}

// Estructura condicional switch

// switch (expresion) {
//     case caso1:
//         código a ejecutar
//         break
//     case caso2:
//         código a ejecutar
//         break
//     ...
//     default
//         código en caso de no coincidencia
// }

let diaSemana = 2;

switch (diaSemana) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Día erróneo');
}

let mes = 4;

switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log('Invierno');
        break; // ¿Puede ser verboso?
    case 4:
    case 5:
    case 6:
        console.log('Primavera');
        break;
    //... continúa
}

// Estructura iterativa For

// for (valor inicial; condición; actualización) {
//     código a ejecutar mientras se cumpla condición
// }

for (i=0; i < 10; i++) {
    console.log('En cada iteración i tendrá el valor ' + i);
}

// Estructura iterativa While

// while (condicion) {
//     Código a ejecutar mientras se cumpla condición
// }

let password;

// while (password !== '1234') {
//     password = prompt('Escriba su contraseña');
//     console.log(typeof password);
// }

// typeof para devolver el tipo 
// *con o sin paréntesis

// Estructura iterativa do while

// do {
//     código a ejecutar mientras se cumpla la condición
// } while (condición);

// do {
//     password = prompt('Escriba su contraseña');
// } while (password !== '1234');

// Estructura try catch para manejo excepciones

// try {
//     Código a ejecutar
// }
// catch(error) {
//     Si el código anterior tiene errores
// }
// finally {
//     opcional
// }

let foo;

try {
    foo = Number(dataPlayer);
    foo = 10;
}
catch (err){
    console.log('Error: ' + err);
}
console.log(foo);