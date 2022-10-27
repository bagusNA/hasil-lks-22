import {Hexaria} from "./assets/js/Hexaria.js";

const gameEl = document.getElementById('game');
const scoreContainer = document.getElementById('score');
const leaderboard = document.getElementById('leaderboard');

const btn = {
    modeMp: document.getElementById('mode-mp'),
    modeBot: document.getElementById('mode-bot'),
    easy: document.getElementById('diff-easy'),
    medium: document.getElementById('diff-medium'),
    hard: document.getElementById('diff-hard'),
    start: document.getElementById('btn-start')
}

const dialog = {
    container: document.getElementById('dialog'),
    instructions: document.getElementById('dialog-instructions'),
    diff: document.getElementById('dialog-diff'),
    start: document.getElementById('dialog-start'),
    gameOver: document.getElementById('dialog-gameover'),
}

const scoreEl = {
    playerOne: document.getElementById('player-one__score'),
    playerTwo: document.getElementById('player-two__score'),
}

const nameInput = {
    playerOne: document.getElementById('player-one__input'),
    playerTwo: document.getElementById('player-two__input'),
}

const nameEl = {
    playerOne: document.getElementById('player-one__name'),
    playerTwo: document.getElementById('player-two__name'),
}

let mode;
let difficulty;
let playerName = {
    one: null,
    two: null
}

const hexa = new Hexaria({
    canvas: gameEl,
    width: 620,
    height: 530,
    scoreEl: scoreEl,
    playerNameEl: nameEl
});

hexa.init();

const chooseModeClick = (selected) => {
    mode = selected;

    dialog.instructions.style.display = 'none';
    dialog.diff.style.display = 'block';
}

const setDifficulty = (selected) => {
   difficulty = selected;

    dialog.diff.style.display = 'none';
    dialog.start.style.display = 'block';
}

const startAction = () => {
    playerName.one = nameInput.playerOne.value;
    playerName.two = nameInput.playerTwo.value;

    dialog.container.style.display = 'none';
    dialog.start.style.display = 'none';
    scoreContainer.style.display = 'block';
    leaderboard.style.display = 'block';

    hexa.play({
        mode: mode,
        playerName: playerName,
        difficulty: difficulty
    });
}

btn.modeMp.addEventListener('click', () => chooseModeClick('multiplayer'));
btn.modeBot.addEventListener('click', () => chooseModeClick('bot'));

btn.easy.addEventListener('click', () => setDifficulty('easy'));
btn.medium.addEventListener('click', () => setDifficulty('medium'));
btn.hard.addEventListener('click', () => setDifficulty('hard'));

btn.start.addEventListener('click', () => startAction());
