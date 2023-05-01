const btnKeyboard = {
    "eng" : {
        "rows": ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=", "Backspace",
        "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "DEL",
        "Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", 	";", "\"", "ENTER",
        "Shift", "\\", "Z", "X", "C", "V", "B", "N", "M", ".", ",","/", " ⇧ ", "Shift",
        "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "⇦", "⇩", 	" ⇨"]
      },

      "ru" : {
        "rows": ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=", "Backspace",
        "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "{", "}", "|", "DEL",
      "Caps Lock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", 	":", "''", "ENTER",
        "Shift", "\u005C", "Я", "Ч", "С", "М", "И", "Т", "M", ".", "\\", "/", "⇧ ", "Shift",
        "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "⇦", "⇩", "⇨"]
      }
}

let body = document.querySelector('body');

let title = document.createElement('h1');
title.className = 'title';
title.textContent = "VIRTUAL KEYBOARD";
body.append(title)

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
body.append(keyboard);

let lang = document.createElement('div');
lang.className = 'lang__keyboard';
keyboard.append(lang);

let getlang =  document.createElement('select');
getlang.className = 'lang';
lang.append(getlang);

let selectEn =  document.createElement('option');
selectEn.value = 'eng';
selectEn.textContent = 'Eng';
getlang.append(selectEn);

let selectRu =  document.createElement('option');
selectRu.value = 'ru';
selectRu.textContent = 'Rus';
getlang.append(selectRu);

let fieldForText = document.createElement('textarea');
fieldForText.setAttribute("type", "text");
fieldForText.className = 'fieldForText';
keyboard.append(fieldForText);

let keyContainer = document.createElement('div');
keyContainer.className = 'keyContainer';
keyboard.append(keyContainer);

function setLocalStorage() {
  localStorage.setItem('lang', getlang.value);
  localStorage.setItem('text', fieldForText.value);
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    getlang.value = localStorage.getItem('lang');
  }
  if (localStorage.getItem('text')) {
    fieldForText.value = localStorage.getItem('text');
  }
}

window.addEventListener('beforeunload', setLocalStorage);
getLocalStorage();

getlang.addEventListener ('change', () => {
    location.reload()
})

for (let i=0; i<5; i++) {
    let rowKeyboard = document.createElement('div');
    rowKeyboard.className = 'row-keyboard';
    keyContainer.append(rowKeyboard);
}
let rowsKeyboard = document.querySelectorAll('.row-keyboard');
for (let i=0; i<=64; i++) {
    let btnKey = document.createElement('div');
    btnKey.className = 'btnKey';
    if(i<14){
    if (i===13) {
        btnKey.classList.add('backspace')
    }
    btnKey.textContent = btnKeyboard[getlang.value].rows[i];
    rowsKeyboard[0].append(btnKey);}
    if (i<29 && i>13){
        if (i===14) {btnKey.classList.add('tab')}
        if (i===28) {btnKey.classList.add('del')}
        btnKey.textContent = btnKeyboard[getlang.value].rows[i];
        rowsKeyboard[1].append(btnKey);
    }
    if(i> 28 && i < 42){
        if (i===29) {btnKey.classList.add('caps-lock')}
        if (i===41) {btnKey.classList.add('enter')}
        btnKey.textContent = btnKeyboard[getlang.value].rows[i];
        rowsKeyboard[2].append(btnKey);  
    }
    if(i>41 && i <= 55){
        if (i===42) {btnKey.classList.add('shift-left')}
        if (i===54) {btnKey.classList.add ('arrow-up')}
        if (i===55) {btnKey.classList.add('shift-right')}
        btnKey.textContent = btnKeyboard[getlang.value].rows[i];
        rowsKeyboard[3].append(btnKey);
    }
    if (i>55) {
    if (i===56) {btnKey.className = 'btnKey ctrl ctrl-left'}
    if (i===57) {btnKey.className = 'btnKey win'}
    if (i===58) {btnKey.className = 'btnKey alt-left'}
    if (i===59) {btnKey.className = 'btnKey space'}
    if (i===60) {btnKey.className = 'btnKey alt-right'}
    if (i===61) {btnKey.className = 'btnKey ctrl-right'}
    if (i===612) {btnKey.className = 'btnKey arrow-left'}
    if (i===63) {btnKey.className = 'btnKey arrow-down'}
    if (i===64) {btnKey.className = 'btnKey arrow-right'}
    btnKey.textContent = btnKeyboard[getlang.value].rows[i];
    rowsKeyboard[4].append(btnKey)};
}

let btnAll = document.querySelectorAll('.btnKey');
let backspace = document.querySelector('.backspace');
let tab = document.querySelector('.tab');
let del = document.querySelector('.del');
let capsLock = document.querySelector('.caps-lock');
let enter = document.querySelector('.enter');
let shiftLeft = document.querySelector('.shift-left');
let shiftRight = document.querySelector('.shift-right');
let ctrlLeft = document.querySelector('.ctrl-left');
let ctrlRight = document.querySelector('.ctrl-right');
let arrowUp = document.querySelector('.arrow-up');
let arrowLeft = document.querySelector('.arrow-left');
let arrowDown = document.querySelector('.arrow-down');
let arrowRight = document.querySelector('.arrow-right');
let altLeft = document.querySelector('.alt-left');
let altRigth = document.querySelector('.alt-right');
let win = document.querySelector('.win');
let space = document.querySelector('.space');



for (let i=0; i<btnAll.length; i++) {
    btnAll[i].setAttribute("name", btnAll[i].innerText);
    btnAll[i].setAttribute("btnValue", btnAll[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function (event) {
    for (let i=0; i<btnAll.length; i++) {
        if (event.key === btnAll[i].getAttribute('name')|| event.key == btnAll[i].getAttribute('btnValue')) {
            btnAll[i].classList.add('active');
            btnAll[i].classList.remove('remove');
        }
    }
})
window.addEventListener('keyup', function(event) {
    for (let i=0; i<btnAll.length; i++) {
        if (event.key == btnAll[i].getAttribute('name') || event.key == btnAll[i].getAttribute('btnValue')) {
            btnAll[i].classList.remove('active');
            btnAll[i].classList.add('remove');
        }
    }
})

btnAll.forEach(btnValue => {
    btnValue.addEventListener('mousedown', function () {
        btnValue.classList.add('active');
    })
    btnValue.addEventListener('mouseup', function (event) {
        // if (btnValue.getAttribute('name' === 'Ctrl')){
        //     btnValue.classList.add('active');
        // }
        btnValue.classList.remove('active');
        btnValue.classList.add('remove');
        getSymbol (btnValue);
    })
})

function getSymbol (btnValue) {
    if (btnValue.getAttribute('name') == 'Caps Lock') {
        capsLock.addEventListener('click', () => {
            fieldForText.textContent = fieldForText.textContent; 
        capsLock.classList.toggle('active')
        })
    } else if (btnValue.getAttribute('name') === 'Backspace') {
        fieldForText.textContent = (fieldForText.textContent).substring(0, (fieldForText.textContent).length-1)
    } 
    else if (btnValue.getAttribute('name') === ''){}
    else if (btnValue.getAttribute('name') === 'Tab') {
        fieldForText.textContent += String.fromCharCode(9);
    } else if (btnValue.getAttribute('name') === 'ENTER') {
        fieldForText.textContent += String.fromCharCode(13);
    } else if (btnValue.getAttribute('name') === '') {
        fieldForText.textContent += String.fromCharCode(32);
    } else if (btnValue.getAttribute('name') === 'Win') {
        win.addEventListener('click', (event) => {
            event.code = 91;
        })
    } else  if (btnValue.getAttribute('name') == 'DEL') {
       fieldForText.textContent = (fieldForText.textContent).substring(0, (fieldForText.textContent).length-1)
    } else {
        if (capsLock.classList.contains('active')) {
            fieldForText.textContent += btnValue.getAttribute('name');
        } else {fieldForText.textContent += btnValue.getAttribute('btnValue');}

    }
}
