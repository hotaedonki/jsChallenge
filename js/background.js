const japan = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
];


function setBackgroundImage() {
    const randomImage = japan[Math.floor(Math.random() * japan.length)];
    document.body.style.backgroundImage = `url('japan/${randomImage}')`;
}

window.onload = setBackgroundImage;

