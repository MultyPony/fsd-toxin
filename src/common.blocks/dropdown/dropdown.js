let dropMenu = document.querySelector('.dropdown');
let inputDrop = document.querySelector('.base-dropdown__arrow');
let menu = document.querySelector(".dropdown__menu-list");

inputDrop.addEventListener('click', function(evt){
    evt.preventDefault();
    dropMenu.classList.toggle('show');
});

menu.onclick = function(evt) {
    let t = evt.target;
    if (t.className == 'input-num__btn') {
        let c = t.closest('.input-num');
        console.log(c.className);
        let i = c.querySelector('.input-num__display');
        i.value = +i.value + 1;
    }
};