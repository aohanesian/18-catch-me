const body = document.querySelector(`body`);
const square = document.querySelector(`.block`);

const maxRGBValue = 255;
function getRandomColor(min = 0, max = maxRGBValue) {
    return Math.random() * (max - min) + min;
}

function getRandomArbitrary(min, max) {
    let result = Math.random() * (max - min) + min;
    if (result < max) return result;
}

const dynamicBlock = setInterval(() => {
    square.style.left = (parseInt(getRandomArbitrary(0, body.clientWidth - square.offsetWidth))) + `px`;
    square.style.top = (parseInt(getRandomArbitrary(0, body.clientHeight - square.offsetHeight))) + `px`;
    square.style.background = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`
}, 500)