'use strict'
const btnKeyboard = {
  eng: {
    rows: [
      '`',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspace',
      'Tab',
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
      '[',
      ']',
      '\\',
      'DEL',
      'Caps Lock',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      ';',
      '"',
      'ENTER',
      'Shift',
      '\\',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      '.',
      ',',
      '/',
      '\u21EE',
      'Shift',
      'Ctrl',
      'Win',
      'Alt',
      ' ',
      'Alt',
      'Ctrl',
      '\u21E6',
      '\u21D3',
      ' \u21E8',
    ],
  },

  ru: {
    rows: [
      '`',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspace',
      'Tab',
      'Й',
      'Ц',
      'У',
      'К',
      'Е',
      'Н',
      'Г',
      'Ш',
      'Щ',
      'З',
      '{',
      '}',
      '|',
      'DEL',
      'Caps Lock',
      'Ф',
      'Ы',
      'В',
      'А',
      'П',
      'Р',
      'О',
      'Л',
      'Д',
      ':',
      "''",
      'ENTER',
      'Shift',
      '\u005C',
      'Я',
      'Ч',
      'С',
      'М',
      'И',
      'Т',
      'M',
      '.',
      '\\',
      '/',
      '\u21EE',
      'Shift',
      'Ctrl',
      'Win',
      'Alt',
      ' ',
      ' ',
      'Alt',
      'Ctrl',
      '\u21E6',
      '\u21D3',
      '\u21E8',
    ],
  },
}

let body = document.querySelector('body')

let title = document.createElement('h1')
title.className = 'title'
title.textContent = 'VIRTUAL KEYBOARD'
body.append(title)

let keyboard = document.createElement('div')
keyboard.className = 'keyboard'
body.append(keyboard)

let lang = document.createElement('div')
lang.className = 'lang'
keyboard.append(lang)

let getlang = document.createElement('select')
getlang.className = 'lang'
lang.append(getlang)

let langEn = document.createElement('option')
langEn.className = 'lang'
langEn.value = 'eng'
langEn.textContent = 'Eng'
getlang.append(langEn)

let langRu = document.createElement('option')
langRu.className = 'lang'
langRu.value = 'ru'
langRu.textContent = 'Rus'
getlang.append(langRu)

let fieldForText = document.createElement('textarea')
fieldForText.setAttribute('type', 'text')
fieldForText.className = 'fieldForText'
keyboard.append(fieldForText)
fieldForText.focus()

let keyContainer = document.createElement('div')
keyContainer.className = 'keyContainer'
keyboard.append(keyContainer)

function setLocalStorage() {
  localStorage.setItem('lang', getlang.value)
  localStorage.setItem('text', fieldForText.value)
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    getlang.value = localStorage.getItem('lang')
  }
  if (localStorage.getItem('text')) {
    fieldForText.value = localStorage.getItem('text')
  }
}

window.addEventListener('beforeunload', setLocalStorage)
getLocalStorage()

getlang.addEventListener('change', () => {
  location.reload()
})

for (let i = 0; i < 5; i++) {
  let rowKeyboard = document.createElement('div')
  rowKeyboard.className = 'row-keyboard'
  keyContainer.append(rowKeyboard)
}
let rowsKeyboard = document.querySelectorAll('.row-keyboard')
for (let i = 0; i <= 64; i++) {
  let btnKey = document.createElement('div')
  btnKey.className = 'btnKey'
  if (i < 14) {
    if (i === 13) {
      btnKey.classList.add('backspace')
    }
    btnKey.textContent = btnKeyboard[getlang.value].rows[i]
    rowsKeyboard[0].append(btnKey)
  }
  if (i < 29 && i > 13) {
    if (i === 14) {
      btnKey.classList.add('tab')
    }
    if (i === 28) {
      btnKey.classList.add('del')
    }
    btnKey.textContent = btnKeyboard[getlang.value].rows[i]
    rowsKeyboard[1].append(btnKey)
  }
  if (i > 28 && i < 42) {
    if (i === 29) {
      btnKey.classList.add('caps-lock')
    }
    if (i === 41) {
      btnKey.classList.add('enter')
    }
    btnKey.textContent = btnKeyboard[getlang.value].rows[i]
    rowsKeyboard[2].append(btnKey)
  }
  if (i > 41 && i <= 55) {
    if (i === 42) {
      btnKey.classList.add('shift-left')
    }
    if (i === 54) {
      btnKey.classList.add('arrow-up')
    }
    if (i === 55) {
      btnKey.classList.add('shift-right')
    }
    btnKey.textContent = btnKeyboard[getlang.value].rows[i]
    rowsKeyboard[3].append(btnKey)
  }
  if (i > 55) {
    if (i === 56) {
      btnKey.classList.add('ctrl-left')
    }
    if (i === 57) {
      btnKey.classList.add('win')
    }
    if (i === 58) {
      btnKey.classList.add('alt-left')
    }
    if (i === 59) {
      btnKey.classList.add('space')
    }
    if (i === 60) {
      btnKey.classList.add('alt-right')
    }
    if (i === 61) {
      btnKey.classList.add('ctrl-right')
    }
    if (i === 62) {
      btnKey.classList.add('arrow-left')
    }
    if (i === 63) {
      btnKey.classList.add('arrow-down')
    }
    if (i === 64) {
      btnKey.classList.add('arrow-right')
    }
    btnKey.textContent = btnKeyboard[getlang.value].rows[i]
    rowsKeyboard[4].append(btnKey)
  }
}

let btnAll = document.querySelectorAll('.btnKey')

let capsLock = document.querySelector('.caps-lock')

let win = document.querySelector('.win')

for (let i = 0; i < btnAll.length; i++) {
  btnAll[i].setAttribute('name', btnAll[i].innerText)
  btnAll[i].setAttribute('btnValue', btnAll[i].innerText.toLowerCase())
}

window.addEventListener('keydown', function (event) {
  for (let i = 0; i < btnAll.length; i++) {
    if (
      event.key === btnAll[i].getAttribute('name') ||
      event.key == btnAll[i].getAttribute('btnValue')
    ) {
      btnAll[i].classList.add('active')
      btnAll[i].classList.remove('remove')
    }
  }
})
window.addEventListener('keyup', function (event) {
  for (let i = 0; i < btnAll.length; i++) {
    if (
      event.key == btnAll[i].getAttribute('name') ||
      event.key == btnAll[i].getAttribute('btnValue')
    ) {
      btnAll[i].classList.remove('active')
      btnAll[i].classList.add('remove')
    }
  }
})

btnAll.forEach((btnValue) => {
  btnValue.addEventListener('mousedown', function () {
    btnValue.classList.add('active')
    btnValue.classList.remove('remove')
  })
  btnValue.addEventListener('mouseup', function () {
    btnValue.classList.remove('active')
    btnValue.classList.add('remove')
    getSymbol(btnValue)
  })
})

function getSymbol(btnValue) {
  if (btnValue.getAttribute('name') == 'Caps Lock') {
    capsLock.addEventListener('click', () => {
      capsLock.classList.toggle('active')
    })
  } else if (btnValue.getAttribute('name') === 'Backspace') {
    fieldForText.textContent = fieldForText.textContent.substring(
      0,
      fieldForText.textContent.length - 1,
    )
  } else if (
    btnValue.getAttribute('name') === 'Shift' ||
    btnValue.getAttribute('name') === 'Ctrl' ||
    btnValue.getAttribute('name') === 'Alt'
  ) {
    ('')
  } else if (btnValue.getAttribute('name') === 'Tab') {
    fieldForText.textContent += String.fromCharCode(9)
  } else if (btnValue.getAttribute('name') === 'ENTER') {
    fieldForText.textContent += String.fromCharCode(13)
  } else if (btnValue.getAttribute('name') === '') {
    fieldForText.textContent += String.fromCharCode(32)
  } else if (btnValue.getAttribute('name') === 'Win') {
    win.addEventListener('click', (event) => {
      event.code = 32
    })
  } else if (btnValue.getAttribute('name') == 'DEL') {
    fieldForText.textContent = fieldForText.textContent.substring(
      0,
      fieldForText.textContent.length - 1,
    )
  } else {
    if (capsLock.classList.contains('active')) {
      fieldForText.textContent += btnValue.getAttribute('name')
    } else {
      fieldForText.textContent += btnValue.getAttribute('btnValue')
    }
  }
}
