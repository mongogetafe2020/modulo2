// Objetos en JavaScript
// Declaraciones
// 1ª.- Mediante un literal de objeto
// {
//     propiedad1: valor,
//     propiedad2: valor,
//     ...
//     método() {
//         //
//     }
//     ...
// }

let jugador1 = {
    nombre: 'Cristiano Ronaldo',
    apellidos: 'Dos Santos Aveiro',
    dorsal: 7,
    equipos: [
        {
            nombre:'Real Madrid',
            ciudad: 'Madrid'
        },
        {
            nombre:'Manchester United',
            ciudad: 'Manchester'
        },
    ],
    goles: 0,
    marcarGol() {
        this.goles++;
    }
}

// Acceso con notación del punto

console.log(jugador1.nombre);
jugador1.dorsal = 9;
jugador1.marcarGol();
jugador1.balonesOro = 5;

console.log(jugador1);

// 2ª Mediante new Object

// new Object()

let jugador2 = new Object();
jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = 10;
jugador2.goles = 0;
jugador2.marcarGol = function () {
    this.goles++;
}


jugador2.marcarGol();

console.log(jugador2);

// 3ª Mediante función constructora

// function Identificador (parámetros) {
//     código para instanciar
//     el objeto con this
// }

function Jugador(nombre, apellidos, dorsal, goles) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dorsal = dorsal;
    this.goles = goles;

    this.marcarGol = function () {
        this.goles++;
        alert('¡Gol de ' + this.nombre + ' ' + this.apellidos + '!');
    }
}

let jugador3 = new Jugador('Sergio', 'Ramos', 4, 0);
let jugador4 = new Jugador('Julio', 'Iglesias', 1, 0);

console.log(jugador3);
//jugador3.marcarGol();

// 4ª Mediante clases (ECMAScript 5)

class Vehiculo {
    marca;
    modelo;
    color;
    stock = 10;

    constructor(marca='Ford', modelo, color='Gris'){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        let precio;
        this.getPrecio = () => precio;
        this.setPrecio = valor => precio = valor;
    }

    ventaVehiculo() {
        this.stock--;
    }

    cambioColor(color) {
        this.color = color;
    }
}

let vehiculo1 = new Vehiculo(undefined, 'Megane', 'Rojo');
vehiculo1.vendido = true;
vehiculo1.cambioColor('Verde');
vehiculo1.setPrecio(15000);

console.log(vehiculo1);
console.log(vehiculo1.getPrecio());








