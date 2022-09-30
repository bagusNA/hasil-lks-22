const loadingTime = 400;
const circleSize = 15;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

async function animate() {
    let posX = circleSize / 2;

    ctx.fillStyle = 'white';

    for (let i = 0; i < loadingTime; i++) {
        if (posX > canvas.width)
            posX = 0 - circleSize;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        posX += 3;

        ctx.beginPath();
        ctx.arc(posX, canvas.height / 2, circleSize, 0, 2 * Math.PI);
        ctx.fill();

        await timer(1);
    }
}

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

window.addEventListener('load', async () => {
    await animate();
});

