export class Hexaria {
    grid = {
        width: 10,
        height: 8,
        radius: 28,
    }

    color = {
        border: 'white',
        red: '#b43232',
        blue: '#4f4fda',
        text: 'white'
    }

    game = {
        grid: [],
        selectedGrids: [],
        currentSelectedGrid: null,
        hoverGrid: [],
    }

    player = {
        currentTurn: 1,
        playerOneName: null,
        playerTwoName: null,
        isAgainstBot: false,
    }

    score = {
        playerOne: 0,
        playerTwo: 0,
    }

    hexa = {
        nextTurnValue: this.randomInt(20, 1),
    }

    mouse = {
        x: 0,
        y: 0,
        clicked: false,
    }

    audio = new Audio('assets/audio/click.mp3');

    angle = 2 * Math.PI / 6;


    constructor({ canvas, height, width, scoreEl }) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.canvas.height = height;
        this.canvas.width = width;

        this.scoreEl = scoreEl;
    }

    init() {
        this.initGrid();
        this.drawGrid();
        this.events();
    }

    drawHexagon(grid, xGrid, yGrid, event) {
        const isEverySecondRow = yGrid % 2 ? true : false;
        const offsetX = isEverySecondRow ? this.grid.radius / 10 - 2 : 0;

        const isEverySecondCol = xGrid % 2 ? true : false;
        const offsetY = isEverySecondCol ? this.grid.radius : 0;

        this.ctx.strokeStyle = this.color.border;

        const path = new Path2D();

        for (let i = 0; i < 6; i++) {
            path.lineTo(
                (xGrid * this.grid.radius * 2 + offsetX) + this.grid.radius * Math.cos(this.angle * i),
                (yGrid * this.grid.radius * 2 + offsetY) + this.grid.radius * Math.sin(this.angle * i)
            )
        }

        path.closePath();
        this.ctx.stroke(path);
        event(path);


        // if (xGrid === this.game.grid[xGrid].x &&
        //     yGrid === this.game.grid[xGrid].y
        // ) {
        //     if (this.game.currentSelectedGrid.player === 1)
        //         this.ctx.fillStyle = this.color.red;
        //     else if (this.game.currentSelectedGrid.player === 2)
        //         this.ctx.fillStyle = this.color.blue;
        //
        //     this.ctx.fill();
        // }

        if (grid.occupied !== -1) {
           if (grid.occupied === 1)
               this.ctx.fillStyle = this.color.red;
           else if (grid.occupied === 2)
               this.ctx.fillStyle = this.color.blue;

           this.ctx.fill(path);
        }

        if (grid.occupied !== -1) {
            this.ctx.fillStyle = this.color.text;
            this.ctx.font = '14px sans-serif';
            this.ctx.fillText(
                grid.value.toString(),
                (xGrid * this.grid.radius * 2 + offsetX - 6),
                (yGrid * this.grid.radius * 2 + offsetY + 5)
            );
        }

    }

    initGrid() {
        this.game.grid = Array.apply(null, Array(this.grid.width));
        this.game.grid.forEach((row, index) => {
            const rowIndex = index;

            this.game.grid[index] = Array.apply(null, Array(this.grid.height));

            this.game.grid[rowIndex].forEach((col, colIndex) => {
                this.game.grid[rowIndex][colIndex] = {
                    occupied: -1,
                    value: this.hexa.nextTurnValue
                };
            });
        });
    }

    drawGrid() {
        this.score.playerOne = 0;
        this.score.playerTwo = 0;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.game.grid.forEach((row, index) => {
            const rowIndex = index;
            this.game.grid[rowIndex].forEach((col, colIndex) => {
                const grid = this.game.grid[rowIndex][colIndex];

                if (grid.occupied !== -1) {
                    if (grid.occupied === 1)
                        this.score.playerOne += grid.value;
                    else if (grid.occupied === 2)
                        this.score.playerTwo += grid.value;
                }

                this.drawHexagon(
                    this.game.grid[rowIndex][colIndex],
                    rowIndex + 1, colIndex + 1,
                    (path) => {
                        if (!this.ctx.isPointInPath(path, this.mouse.x, this.mouse.y)) return;

                        this.game.hoverGrid = [rowIndex, colIndex];

                        if (!this.mouse.clicked) return;

                        this.audio.play();

                        // const affectedGrid = [
                        //     rowIndex !== 0 ? this.game.grid[rowIndex - 1][colIndex] : null,
                        //     rowIndex !== 0 ? this.game.grid[rowIndex - 1][colIndex] : null,
                        //     rowIndex !== 0 ? this.game.grid[rowIndex - 1][colIndex] : null,
                        //     this.game.grid[rowIndex - 1][colIndex + 1],
                        //     this.game.grid[rowIndex + 1][colIndex],
                        //
                        // ]

                        // Game logic
                        if (grid.occupied !== -1) {

                            // if ( aboveGrid.occupied === grid.occupied){

                            // }

                        }
                        // ---



                        this.game.currentSelectedGrid = {
                            player: this.player.currentTurn,
                            x: rowIndex,
                            y: colIndex
                        };

                        this.game.grid[rowIndex][colIndex].occupied = this.game.currentSelectedGrid.player;
                        this.game.grid[rowIndex][colIndex].value = this.hexa.nextTurnValue;
                });
            });
        });

        this.mouse.clicked = false;

        this.calculateScore();
    }

    nextTurn() {
        this.hexa.nextTurnValue = this.randomInt(20, 1);
        if (this.player.currentTurn === 1)
            this.player.currentTurn = 2;
        else if (this.player.currentTurn === 2)
            this.player.currentTurn = 1;
    }

    calculateScore() {
        this.scoreEl.playerOne.innerHTML = this.score.playerOne;
        this.scoreEl.playerTwo.innerHTML = this.score.playerTwo;
    }

    events() {
        this.onHover();
        this.onClick();
    }

    onHover() {
        document.addEventListener('mousemove', (ev) => {
            const rect = this.canvas.getBoundingClientRect();

            this.mouse.x = ev.clientX - rect.left;
            this.mouse.y = ev.clientY - rect.top;

            this.drawGrid();
        });
    }

    onClick() {
        document.addEventListener('mousedown', () => {
            this.mouse.clicked = true;
            this.drawGrid();
            this.nextTurn();
        });
    }

    randomInt(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}