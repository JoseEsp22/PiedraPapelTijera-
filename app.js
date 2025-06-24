const opcionesValidas = ["piedra", "papel", "tijera"];

let puntosJugador = 0;
let puntosPC = 0;

for (let i = 1; i <= 5; i++) {

    let jugador;

    while (
        jugador === undefined ||
        jugador === null ||
        jugador.trim() === "" ||
        !opcionesValidas.includes(jugador.toLowerCase())
    ) {
        jugador = prompt("Ronda " + i + " - Elige: piedra, papel o tijera", "piedra");
        if (
            jugador === null || 
            jugador.trim() === "" || 
            !opcionesValidas.includes(jugador.toLowerCase())
        ) {
            alert("Por favor elige una opción válida.");
        }
    }

    jugador = jugador.toLowerCase();

    const eleccionPC = opcionesValidas[Math.floor(Math.random() * 3)];

    console.log("🔄 Ronda " + i);
    console.log("Tú eliges: " + jugador);
    console.log("PC elige: " + eleccionPC);

    if (jugador === eleccionPC) {
        console.log("Resultado: Empate 🤝");
    } else if (
        (jugador === "piedra" && eleccionPC === "tijera") ||
        (jugador === "papel" && eleccionPC === "piedra") ||
        (jugador === "tijera" && eleccionPC === "papel")
    ) {
        console.log("Resultado: ¡Ganaste esta ronda! 🏆");
        puntosJugador++;
    } else {
        console.log("Resultado: Perdiste esta ronda 😢");
        puntosPC++;
    }

    console.log("Puntaje actual - Tú: " + puntosJugador + " | PC: " + puntosPC);
    console.log("--------------------------------------------------");
}

console.log("🎮 Juego terminado");
console.log("Puntaje final - Tú: " + puntosJugador + " | PC: " + puntosPC);

if (puntosJugador > puntosPC) {
    console.log("🏁 ¡Ganaste el juego completo! 🎉");
} else if (puntosPC > puntosJugador) {
    console.log("🏁 La máquina ganó el juego. Inténtalo de nuevo 🤖");
} else {
    console.log("🏁 El juego terminó en empate total 🤷‍♂️");
}
