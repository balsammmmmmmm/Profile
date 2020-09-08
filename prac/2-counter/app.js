const number = document.querySelector('h2');
const decrease = document.querySelector('.counter-decrease');
const reset = document.querySelector('.counter-reset');
const increase = document.querySelector('.counter-increase');
const btns = document.querySelectorAll('.btn');
let num = 0;

btns.forEach(btn=>{
    btn.onclick = (cbtn) => {
        if (cbtn.currentTarget.textContent == "decrease"){
            num--
        } else if (btn.textContent == "increase"){
            num++;
        } else if (btn.textContent == "reset"){
            num = 0
        }
        if (num > 0){
            number.style.color = "green";
        }
        if (num < 0){
            number.style.color = "red";
        } else {
            number.style.color = "black";
        }
        number.textContent = num;
    }
});
  