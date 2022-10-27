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
        // this.testDrawHexa(10, 20);
        // this.testDrawGrid(
        // this.testDrawGrid(this.grid.radius * 16 , 500)
        //     this.grid.width * this.grid.radius * 2,
        //     this.grid.width * this.grid.radius * 2
        // );

        console.log(this.grid.width * this.grid.radius * 2,
            this.grid.width * this.grid.radius * 2
        )
    }

    drawHexagon(xGrid, yGrid) {
        const isEverySecondRow = yGrid % 2 ? true : false;
        const offsetX = isEverySecondRow ? this.grid.radius / 10 - 2 : 0;

        const isEverySecondCol = xGrid % 2 ? true : false;
        const offsetY = isEverySecondCol ? this.grid.radius : 0;

        this.ctx.strokeStyle = this.color.border;
        this.ctx.beginPath();

        for (let i = 0; i < 6; i++) {
            this.ctx.lineTo(
                (xGrid * this.grid.radius * 2 + offsetX) + this.grid.radius * Math.cos(this.angle * i),
                (yGrid * this.grid.radius * 2 + offsetY) + this.grid.radius * Math.sin(this.angle * i)
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

    testDrawHexa(x, y) {
        this.ctx.strokeStyle = this.color.border;
        this.ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            this.ctx.lineTo(
                x + this.grid.radius * Math.cos(this.angle * i),
                y + this.grid.radius * Math.sin(this.angle * i)
            );
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    testDrawGrid(width, height) {
        for (let y = this.grid.radius; y + this.grid.radius * Math.sin(this.angle) < height; y += this.grid.radius * Math.sin(this.angle)) {
            for (let x = this.grid.radius, j = 0; x + this.grid.radius * (1 + Math.cos(this.angle)) < width; x += this.grid.radius * (1 + Math.cos(this.angle)), y += (-1) ** j++ * this.grid.radius * Math.sin(this.angle)) {
                this.testDrawHexa(x, y);
            }
        }
    }
}