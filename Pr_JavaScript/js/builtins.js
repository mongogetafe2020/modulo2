// String

let nombre = 'Juan';

console.log(nombre.length);
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());
console.log(nombre.charAt(2));
console.log(nombre.indexOf('n'));
console.log(nombre.indexOf('k'));

nombre = 'Amanda';

console.log(nombre.lastIndexOf('a'));
console.log(nombre.includes('x'));
console.log(nombre.startsWith('a'));
console.log(nombre.endsWith('a'));

let apellidos = 'Pérez';

let nombreCompleto = nombre.concat(' ' + apellidos);
console.log(nombreCompleto);

let frase = '    En un      lugar de La Mancha...     ';
console.log(frase.trim());

console.log(apellidos.repeat(4));

let cadena = '01243abcde';

console.log(cadena.slice(2, 5)); //segundo parametro sin incluir
console.log(cadena.slice(-2)); //dos últimos

// Template literals
// Escribir cadenas multilínea sin secuencias de escape
// y permitiendo interpolación de variables o constantes
// Sintaxis
// let identificador = `
    //caracteres... ${variable}
//`

let mensaje = `La jugadora es ${'Doña ' + nombre} ${apellidos}.`;
console.log(mensaje);

// Numbers

let resultado = '9.7';

console.log(parseInt(resultado));
console.log(parseFloat(resultado));

let puntuacion = 9;
console.log(typeof puntuacion.toString());

console.log(Number(resultado));
console.log(Number.isInteger(puntuacion));

let resultado2 = 'Pepe';

console.log(isNaN(resultado2));

let puntuacion2 = -2.6;
console.log(Math.round(puntuacion2));
console.log(Math.ceil(puntuacion2));
console.log(Math.floor(puntuacion2));

// Fechas

let ahora = new Date();
console.log(ahora);

// new Date(año, mes, dia, hora, minuto, segundos, milisegundos)
// new Date(milisegundos) referenciados a Fecha Epoch 
// new Date(fecha-string)

let fechaNacimiento = new Date(73, 11, 18);
console.log(fechaNacimiento);
let fechaAlta = new Date(2020, 0, 13);
console.log(fechaAlta);
let fechaExpedicion = new Date('2020-01-13');
console.log(fechaExpedicion);

console.log(ahora.getFullYear());
console.log(ahora.getMonth());
let meses = ['E','F','M','A','M','J','Jl','A','S','O','N','D'];
console.log(meses[ahora.getMonth()]);

console.log(ahora.getDate()); // día del mes
console.log(ahora.getMinutes());
console.log(ahora.getSeconds());
console.log(ahora.getMilliseconds());

console.log(ahora.getDay()); // día de la semana
console.log(ahora.getTime()); // milisegundos

// Arrays

let frutas = ['manzanas','naranjas','kiwis'];

console.log(frutas.length);

frutas.pop() // elimina el último
console.log(frutas);

frutas.push('albaricoques') // añade al final
console.log(frutas);

frutas.shift() // extrae el primero y desplaza el resto
console.log(frutas);

frutas.unshift('plátanos'); // añade al principio y desplaza el resto
console.log(frutas);

let frutasSeleccionadas = frutas.slice(1,2); // primera posición incluida
                                             // segunda no incluida
console.log(frutasSeleccionadas);

frutas.splice(1,2); // ambas posiciones incluidas
console.log(frutas);

frutas = ['manzanas','naranjas','kiwis'];

frutas.splice(1,1, 'platanos'); // sustituye el elemento
console.log(frutas);

frutas.splice(2,0, 'melones'); // añade el elemento
console.log(frutas);



