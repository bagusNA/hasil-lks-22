const WIDTH = 400;
const HEIGHT = 400;
const box = {
    x: 100,
    y: 100,
    borderWidth: 3,
}
let isMouseClicked = false;

const overlay = document.getElementById('overlay');
const ctx = overlay.getContext('2d');

const setup = () => {
    overlay.width = window.innerWidth;
    overlay.height = window.innerHeight;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, overlay.width, overlay.height);
}

const drawBox = () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, overlay.width, overlay.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(
        box.x - box.borderWidth, box.y - box.borderWidth,
        WIDTH + box.borderWidth * 2, HEIGHT + box.borderWidth * 2
    )
    ctx.clearRect(box.x, box.y, WIDTH, HEIGHT);
}

setup();
drawBox();

document.addEventListener('mousemove', (ev) => {
    if (!isMouseClicked) return;

   box.x += ev.movementX;
   box.y += ev.movementY;

   drawBox();
});

document.addEventListener('mousedown', () => {
    isMouseClicked = true;
});

document.addEventListener('mouseup', () => {
    isMouseClicked = false;
});

window.addEventListener('resize', () => {
    setup();
    drawBox();
})