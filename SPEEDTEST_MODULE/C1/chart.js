class Chart {
    width = 600;
    height = 400;

    data = {
        highest: 0,
        lowest: 0,
        length: 0,
        values: [],
    }

    yAxis = {
        pointDistance: 0,
        pointWidth: 10,
    }

    xAxis = {
        pointDistance: 0,
        pointWidth: 10,
    }

    padding = 40;

    constructor({ title, data, canvasEl }) {
        this.title = title;
        this.data.rawData = data;
        this.canvasEl = canvasEl;
        this.ctx = this.canvasEl.getContext('2d');

        this.canvasEl.width = this.width;
        this.canvasEl.height = this.height;

        this.setup();
    }

    setup() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.calcData();
        this.drawLabels();
    }

    calcData() {
        this.data.rawData.forEach(data => {
            this.data.values.push(data.jumlah);
        });

        this.data.length = this.data.values.length;
        this.data.values.sort((a, b) => (a - b));
        this.data.lowest = this.data.values[0];
        this.data.highest = this.data.values[this.data.length - 1];
    }

    drawLabels() {
        const xLength = this.canvasEl.width - this.padding * 2;
        const yLength = this.canvasEl.height - this.padding * 2;

        this.ctx.fillStyle = 'black';
        // X
        this.ctx.fillRect(this.padding, this.canvasEl.height - this.padding, xLength, 3);
        // Y
        this.ctx.fillRect(this.padding, this.padding, 3, yLength);

        // Texts
        this.ctx.fillText('Jumlah', this.padding - 10, this.padding - 10);

        this.ctx.fillText('Tanggal', this.canvasEl.width - this.padding, this.canvasEl.height - this.padding);

        this.yAxis.pointDistance = yLength / 5;

        // Line Y Axis
        for (let i = 1; i <= 5; i++) {
            const y = this.yAxis.pointDistance * i;
            this.ctx.fillRect(
                this.padding - this.yAxis.pointWidth, y,
                this.yAxis.pointWidth, 2
            );

            const value = Math.floor(this.data.highest / 5 * (6 - i));
            this.ctx.fillText(
                value.toString(),
                this.padding - this.yAxis.pointWidth - 5, y -5,
            )
        }


        // X Axis
        this.xAxis.pointDistance = xLength / this.data.length;

        this.data.values.forEach((data, index) => {
            const x = this.xAxis.pointDistance * ++index;

            this.ctx.fillRect(
                x, this.canvasEl.height - this.padding,
                2, this.xAxis.pointWidth
            );

            this.ctx.fillText(
                index.toString(),
                x - 5,  this.canvasEl.height - this.padding + 25,
            );

            // Line
            this.ctx.beginPath();

            const lineY = this.canvasEl.height - this.padding + (this.data.highest - data)
            this.ctx.moveTo(x, lineY);
            this.ctx.stroke();

        });


    }
}

const canvasEl = document.getElementById('canvas');

let chart = new Chart({
    canvasEl: canvasEl,
    title: "Data Covid Jakarta Oktober",
    data: [
        {
            tanggal: 1,
            jumlah: 13,
        },
        {
            tanggal: 2,
            jumlah: 20,
        },
        {
            tanggal: 3,
            jumlah: 70,
        },
        {
            tanggal: 4,
            jumlah: 40,
        },
        {
            tanggal: 5,
            jumlah: 60,
        },
        {
            tanggal: 6,
            jumlah: 20,
        },
        {
            tanggal: 7,
            jumlah: 50,
        },
        {
            tanggal: 8,
            jumlah: 30,
        },
    ]
});
