let dropMenu = document.querySelector('.dropdown');
let inputDrop = document.querySelector('.dropdown__arrow');

inputDrop.addEventListener('click', function(evt){
    evt.preventDefault();
    dropMenu.classList.toggle('show');
});