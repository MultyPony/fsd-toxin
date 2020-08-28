let lb = document.querySelector('.like-button__wrapper');
let lt = document.querySelector('.like-button__value');
let curVal = '';



if (lb != null) {
    lb.addEventListener('click', function(evt) {
        if (lb.classList.contains('like-button_active')) {
            lb.classList.remove('like-button_active');
            curVal = lt.innerText;
            lt.innerText = +curVal - 1;
        }
        else {
            lb.classList.add('like-button_active');
            curVal = lt.innerText;
            lt.innerText = +curVal + 1;
        }
    });
}