const body =document.querySelector("body");

const IMG_NUMBER=5;

function handleImgLoad() {
    console.log("finish loaning");
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src=`images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);

}

function genRandom() {
    const random = Math.floor(Math.random()*IMG_NUMBER);

    return random;
}

function init() {
    const randomNumber=genRandom();
    paintImage(randomNumber);
}

init();