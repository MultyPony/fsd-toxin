let checkList = document.querySelector('.ext-checkbox-list');
let arrow = document.querySelector('.ext-checkbox-list__arrow');

if (arrow != null) {
    arrow.addEventListener('click', function(evt){
        evt.preventDefault();
        checkList.classList.toggle('show');
    });
}