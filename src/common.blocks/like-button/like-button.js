let lb = document.querySelector('.like-button__wrapper');
let lt = document.querySelector('.like-button__value');
let curVal = '';


lb.addEventListener('click', function(evt) {
    if (lb.classList.contains('like-button__active')) {
        lb.classList.remove('like-button__active');
        curVal = lt.innerText;
        lt.innerText = +curVal - 1;
    }
    else {
        lb.classList.add('like-button__active');
        curVal = lt.innerText;
        lt.innerText = +curVal + 1;
    }
})