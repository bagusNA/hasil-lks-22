export class Hexaria {
    grid = {
        width: 10,
        height: 8,
        radius: 28,
    }

    color = {
        border: 'white',
        red: '#b43232',
        blue: '#4f4fda'
    }

    game = {
        grid: [],
        selectedGrids: [],
        currentSelectedGrid: null,
        hoverGrid: [],
    }

    mouse = {
        x: 0,
        y: 0,
        clicked: true,
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
        this.events();
    }

    drawHexagon(xGrid, yGrid, event) {
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

        if (xGrid === this.game.currentSelectedGrid.x &&
            yGrid === this.game.currentSelectedGrid.y) {

        }

        event(path);
    }

    drawGrid() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.game.grid = Array.apply(null, Array(this.grid.width));
        this.game.grid.forEach((row, index) => {
            const rowIndex = index;

            this.game.grid[rowIndex] = Array.apply(null, Array(this.grid.height));
            this.game.grid[rowIndex].forEach((col, colIndex) => {
                this.game.grid[rowIndex][colIndex] = {
                    occupied: -1,
                };

                this.drawHexagon(
                    rowIndex + 1, colIndex + 1,
                    (path) => {
                        if (!this.ctx.isPointInPath(path, this.mouse.x, this.mouse.y)) return;

                        this.game.hoverGrid = [rowIndex, colIndex];

                        if (!this.mouse.clicked) return;

                        this.game.currentSelectedGrid = {
                            player: 1,
                            x: rowIndex,
                            y: colIndex
                        };

                        this.game.selectedGrids.push(this.game.currentSelectedGrid);

                        this.mouse.clicked = false;
                });
            });
        });
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
            console.log(this.game.selectedGrid)
        });
    }


}