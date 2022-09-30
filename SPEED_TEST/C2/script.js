let x, y;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('image');
const btnSplit = document.getElementById('btn-split');
const xInput = document.getElementById('x');
const yInput = document.getElementById('y');

const render = () => {
    const widthRatio = canvas.width / image.width;
    const heightRatio = canvas.height / image.height;
    const ratio = Math.min(widthRatio, heightRatio);

    ctx.drawImage(
        image,
        0, 0,
        image.width, image.height,
        0, 0,
        image.width * ratio, image.height * ratio
    );
}

const split = () => {

}

const getValues = () => {
    x = parseInt(xInput.value);
    y = parseInt(yInput.value);
}

image.addEventListener('load', () => {
    render();
});

btnSplit.addEventListener('click', () => {
    getValues();
});