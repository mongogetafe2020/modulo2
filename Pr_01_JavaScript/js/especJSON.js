// JSON

let jugador = {
    nombre: 'Cristiano',
    apellidos: 'Ronaldo',
    dorsal: '07',
    goles: 0
}

let jugadorenJSON = JSON.stringify(jugador);
console.log(jugadorenJSON);

let nuevoJugador = JSON.parse(jugadorenJSON);

// JSON en localStorage

let jugadores = [
    {
        nombre: 'Cristiano',
        apellidos: 'Ronaldo',
        dorsal: '07',
        goles: 0
    },
    {
        nombre: 'Lionel',
        apellidos: 'Messi',
        dorsal: '10',
        goles: 0
    }
];

localStorage.setItem('jugadores', JSON.stringify(jugadores));

let nuevosJugadores = JSON.parse(localStorage.getItem('jugadores'));
console.log(nuevosJugadores[0]);


