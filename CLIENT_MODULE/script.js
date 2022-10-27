import {Hexaria} from "./assets/js/Hexaria.js";

const gameEl = document.getElementById('game');

const btn = {
    modeMp: document.getElementById('mode-mp'),
    modeBot: document.getElementById('mode-bot'),
    start: document.getElementById('btn-start')
}

const dialog = {
    container: document.getElementById('dialog'),
    start: document.getElementById('dialog-start'),
    instructions: document.getElementById('dialog-instructions'),
    gameOver: document.getElementById('dialog-gameover'),
}

const scoreEl = {
    playerOne: document.getElementById('player-one__score'),
    playerTwo: document.getElementById('player-two__score'),
}

const nameEl = {
    playerOne: document.getElementById('player-one__name'),
    playerTwo: document.getElementById('player-two__name'),
}

let mode;
let playerName = {
    one: null,
    two: null
}

const hexa = new Hexaria({
    canvas: gameEl,
    width: 620,
    height: 530,
    scoreEl: scoreEl,
});

hexa.init();

const chooseModeClick = (selected) => {
    mode = selected;

    dialog.instructions.style.display = 'none';
    dialog.start.style.display = 'block';
}

btn.modeMp.addEventListener('click', () => chooseModeClick('multiplayer'));
btn.modeBot.addEventListener('click', () => chooseModeClick('bot'));