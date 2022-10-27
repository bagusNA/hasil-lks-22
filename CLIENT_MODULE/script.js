import {Hexaria} from "./assets/js/Hexaria.js";

const gameEl = document.getElementById('game');
const dialog = {
    container: document.getElementById('dialog'),
    start: document.getElementById('dialog-start'),
    gameOver: document.getElementById('dialog-gameover'),
}

const scoreEl = {
    playerOne: document.getElementById('player-one__score'),
    playerTwo: document.getElementById('player-two__score'),
}

const hexa = new Hexaria({
    canvas: gameEl,
    width: 620,
    height: 530,
    scoreEl: scoreEl,
});

hexa.init();

