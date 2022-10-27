export class Hexaria {
    grid = {
        width: 10,
        height: 8,
        radius: 28,
    }

    color = {
        border: 'white'
    }

    game = {
        grid: []
    }

    angle = 2 * Math.PI / 6;


    constructor({ canvas, height, width }) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.canvas.height = height;
        this.canvas.width = width;

    }

    init() {
        this.drawGrid();
    }

    drawHexagon(x, y) {
        this.ctx.strokeStyle = this.color.border;
        this.ctx.beginPath();

        for (let i = 0; i < 6; i++) {
            this.ctx.lineTo(
                (x * this.grid.radius * 2) + this.grid.radius * Math.cos(this.angle * i),
                (y * this.grid.radius * 2) + this.grid.radius * Math.sin(this.angle * i)
            )
        }

        this.ctx.closePath();
        this.ctx.stroke();
    }

    drawGrid() {
        this.game.grid = Array.apply(null, Array(this.grid.width));
        this.game.grid.forEach((row, index) => {
            const rowIndex = index;

            this.game.grid[rowIndex] = Array.apply(null, Array(this.grid.height));
            this.game.grid[rowIndex].forEach((col, colIndex) => {
                this.game.grid[rowIndex][colIndex] = -1;

                this.drawHexagon(rowIndex + 1, colIndex + 1);
            });
        });

    }
}