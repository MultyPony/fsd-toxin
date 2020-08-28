let dropMenu = document.querySelector('.dropdown');
let inputField = dropMenu.querySelector('.base-field__input');
let inputFieldDefualValue = 'Сколько гостей';
let inputDrop = document.querySelector('.base-dropdown__arrow');
let menu = document.querySelector(".dropdown__menu");
let resetBtn = menu.querySelector('.dropdown__reset-btn');
let applyBtn = menu.querySelector('.dropdown__apply-btn');

inputDrop.addEventListener('click', function(evt){
    evt.preventDefault();
    dropMenu.classList.toggle('show');
});

menu.onclick = function(evt) {
    let target = evt.target;
    let displayContainer = target.closest('.input-num');
    if (displayContainer === null)
        return;
    let display = displayContainer.querySelector('.input-num__display');

    if (target.classList.contains('input-num__max-btn')) {
        if (display.value == 0)
            displayContainer.querySelector('.input-num__min-btn').classList.remove('input-num__btn_disabled');
        display.value = +display.value + 1;
        resetBtn.classList.add('dropdown__reset-btn_visible');
    }
    else if (target.classList.contains('input-num__min-btn')) {
        if (display.value > 0) {
            display.value = +display.value - 1;
            if (display.value == 0) {
                target.classList.add('input-num__btn_disabled');
            }
        }
    }
};

resetBtn.onclick = function(evt) {
    evt.preventDefault();
    inputField.value = inputFieldDefualValue;
    let x = menu.querySelectorAll('.input-num__display');
    x.forEach(function(x) {
        x.value = 0;
    })
    resetBtn.classList.remove('dropdown__reset-btn_visible');
}

applyBtn.onclick = function(evt) {
    evt.preventDefault();
    let guestSum = sumOfPeople('.dropdown__guests');
    let babiesSum = sumOfPeople('.dropdown__babies');
    let guestStr = '';
    let babiesStr = '';
    let resStr = 'Сколько гостей';

    if (guestSum > 0)
        guestStr = +guestSum + abc(guestSum, [' гость', ' гостя', ' гостей']);
    if (babiesSum > 0) {
        if (guestSum > 0)
            babiesStr = ', '; 
        babiesStr += +babiesSum + abc(babiesSum, [' младенец', ' младенца', ' младенцев']);
    }
    
    resStr = guestStr + babiesStr;
    inputField.value = resStr;
}

function sumOfPeople(selector) {
    let nodes = menu.querySelectorAll(selector);
    let arr = new Array();
    let sum = 0;

    nodes.forEach(function(nodes) {
        arr.push(nodes.querySelector('.input-num__display'));
    });

    arr.forEach(function(arr) {
        sum += +arr.value;
    });

    return sum;
}

function abc(sum, arr) {
    let ostatok = sum % 100;
    let i = 0;
    if (ostatok > 20)
        ostatok = ostatok % 10;
    if (ostatok >= 2 && ostatok <= 4)
        i = 1;
    else if ((ostatok >= 5 && ostatok <= 20) || ostatok == 0)
        i = 2;
    return arr[i];
}