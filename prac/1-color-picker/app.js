const btn = document.querySelector('.button');
const background = document.querySelector('.background');
const span = document.querySelector('.span');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.onclick = () => {
    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor+=hex[getRandomNumber()]
    };
    span.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
};

getRandomNumber =() => {
     return Math.floor(Math.random() * hex.length);
};