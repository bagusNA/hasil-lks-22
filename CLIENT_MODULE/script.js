import {Hexaria} from "./assets/js/Hexaria.js";

const gameEl = document.getElementById('game');
const dialog = {
    container: document.getElementById('dialog'),
    start: document.getElementById('dialog-start'),
    gameOver: document.getElementById('dialog-gameover'),
}

const hexa = new Hexaria({
    canvas: gameEl,
    width: 800,
    height: 600,
});

hexa.init();

