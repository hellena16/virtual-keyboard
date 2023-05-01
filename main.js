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

