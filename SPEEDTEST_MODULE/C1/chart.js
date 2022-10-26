class Chart {
    width = 600;
    height = 400;

    data = {
        highest: 0,
        lowest: 0,
        length: 0,
        values: [],
        unsortedValues: [],
    }

    yAxis = {
        name: null,
        pointDistance: 0,
        pointWidth: 10,
    }

    xAxis = {
        name: null,
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

        this.keys = Object.keys(this.data.rawData[0]);

        this.xAxis.name = this.keys[0].charAt(0).toUpperCase() + this.keys[0].slice(1);
        this.yAxis.name = this.keys[1].charAt(0).toUpperCase() + this.keys[1].slice(1);

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
        this.data.unsortedValues = structuredClone(this.data.values);
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
        this.ctx.fillText(this.yAxis.name, this.padding - 10, this.padding - 10);

        this.ctx.fillText(this.xAxis.name, this.canvasEl.width - this.padding, this.canvasEl.height - this.padding);

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

        this.ctx.beginPath();
        this.data.unsortedValues.forEach((data, index) => {
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
            this.ctx.fillStyle = 'red';

            const lineY = Math.floor(
                (this.canvasEl.height - this.padding * 2) * ((this.data.highest - data) / this.data.highest) + this.padding * 3/2  + 4
            );
            this.ctx.lineTo(x, lineY);
            this.ctx.stroke();

            this.ctx.fillStyle = 'black';
        });
        this.ctx.closePath();
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
