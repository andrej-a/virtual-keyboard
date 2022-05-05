const keyInformation = [
  {
    key: '`',
    keyEN_SHIFT: '~',
    keyRU: 'ё',
    keyRU_SHIFT: 'Ё',
    code: 'Backquote',
  },
  {
    key: '1',
    keyEN_SHIFT: '!',
    keyRU: '1',
    keyRU_SHIFT: '"',
    code: 'Digit1',
  },
  {
    key: '2',
    keyEN_SHIFT: '@',
    keyRU: '2',
    keyRU_SHIFT: '"',
    code: 'Digit2',
  },
  {
    key: '3',
    keyEN_SHIFT: '#',
    keyRU: '3',
    keyRU_SHIFT: '№',
    code: 'Digit3',
  },
  {
    key: '4',
    keyEN_SHIFT: '$',
    keyRU: '4',
    keyRU_SHIFT: ';',
    code: 'Digit4',
  },
  {
    key: '5',
    keyEN_SHIFT: '%',
    keyRU: '5',
    keyRU_SHIFT: '%',
    code: 'Digit5',
  },
  {
    key: '6',
    keyEN_SHIFT: '^',
    keyRU: '6',
    keyRU_SHIFT: ':',
    code: 'Digit6',
  },
  {
    key: '7',
    keyEN_SHIFT: '&',
    keyRU: '7',
    keyRU_SHIFT: '?',
    code: 'Digit7',
  },
  {
    key: '8',
    keyEN_SHIFT: '*',
    keyRU: '8',
    keyRU_SHIFT: '*',
    code: 'Digit8',
  },
  {
    key: '9',
    keyEN_SHIFT: '(',
    keyRU: '9',
    keyRU_SHIFT: '(',
    code: 'Digit9',
  },
  {
    key: '0',
    keyEN_SHIFT: ')',
    keyRU: '0',
    keyRU_SHIFT: ')',
    code: 'Digit0',
  },
  {
    key: '-',
    keyEN_SHIFT: '_',
    keyRU: '-',
    keyRU_SHIFT: '_',
    code: 'Minus',
  },
  {
    key: '=',
    keyEN_SHIFT: '+',
    keyRU: '=',
    keyRU_SHIFT: '+',
    code: 'Equal',
  },
  {
    key: 'Backspace',
    keyEN_SHIFT: 'Backspace',
    keyRU: 'Backspace',
    keyRU_SHIFT: 'Backspace',
    code: 'Backspace',
    system: true,
  },
  {
    key: 'Delete',
    keyEN_SHIFT: 'Delete',
    keyRU: 'Delete',
    keyRU_SHIFT: 'Delete',
    code: 'Delete',
    system: true,
  },
  {
    key: 'Tab',
    keyEN_SHIFT: 'Tab',
    keyRU: 'Tab',
    keyRU_SHIFT: 'Tab',
    code: 'Tab',
    system: true,
  },
  {
    key: 'q',
    keyEN_SHIFT: 'Q',
    keyRU: 'й',
    keyRU_SHIFT: 'Й',
    code: 'KeyQ',
  },
  {
    key: 'w',
    keyEN_SHIFT: 'W',
    keyRU: 'ц',
    keyRU_SHIFT: 'Ц',
    code: 'KeyW',
  },
  {
    key: 'e',
    keyEN_SHIFT: 'E',
    keyRU: 'у',
    keyRU_SHIFT: 'У',
    code: 'KeyE',
  },
  {
    key: 'r',
    keyEN_SHIFT: 'R',
    keyRU: 'к',
    keyRU_SHIFT: 'К',
    code: 'KeyR',
  },
  {
    key: 't',
    keyEN_SHIFT: 'T',
    keyRU: 'е',
    keyRU_SHIFT: 'Е',
    code: 'KeyT',
  },
  {
    key: 'y',
    keyEN_SHIFT: 'Y',
    keyRU: 'н',
    keyRU_SHIFT: 'Н',
    code: 'KeyY',
  },
  {
    key: 'u',
    keyEN_SHIFT: 'U',
    keyRU: 'г',
    keyRU_SHIFT: 'Г',
    code: 'KeyU',
  },
  {
    key: 'i',
    keyEN_SHIFT: 'I',
    keyRU: 'ш',
    keyRU_SHIFT: 'Ш',
    code: 'KeyI',
  },
  {
    key: 'o',
    keyEN_SHIFT: 'O',
    keyRU: 'щ',
    keyRU_SHIFT: 'Щ',
    code: 'KeyO',
  },
  {
    key: 'p',
    keyEN_SHIFT: 'P',
    keyRU: 'з',
    keyRU_SHIFT: 'З',
    code: 'KeyP',
  },
  {
    key: '[',
    keyEN_SHIFT: '{',
    keyRU: 'х',
    keyRU_SHIFT: 'Х',
    code: 'BracketLeft',
  },
  {
    key: ']',
    keyEN_SHIFT: '}',
    keyRU: 'ъ',
    keyRU_SHIFT: 'Ъ',
    code: 'BracketRight',
  },
  {
    key: '\\',
    keyEN_SHIFT: '|',
    keyRU: '\\',
    keyRU_SHIFT: '/',
    code: 'Backslash',
  },
  {
    key: 'CapsLock',
    keyEN_SHIFT: 'CapsLock',
    keyRU: 'CapsLock',
    keyRU_SHIFT: 'CapsLock',
    code: 'CapsLock',
    system: true,
  },
  {
    key: 'a',
    keyEN_SHIFT: 'A',
    keyRU: 'ф',
    keyRU_SHIFT: 'Ф',
    code: 'KeyA',
  },
  {
    key: 's',
    keyEN_SHIFT: 'S',
    keyRU: 'ы',
    keyRU_SHIFT: 'Ы',
    code: 'KeyS',
  },
  {
    key: 'd',
    keyEN_SHIFT: 'D',
    keyRU: 'в',
    keyRU_SHIFT: 'В',
    code: 'KeyD',
  },
  {
    key: 'f',
    keyEN_SHIFT: 'F',
    keyRU: 'а',
    keyRU_SHIFT: 'А',
    code: 'KeyF',
  },
  {
    key: 'g',
    keyEN_SHIFT: 'G',
    keyRU: 'п',
    keyRU_SHIFT: 'П',
    code: 'KeyG',
  },
  {
    key: 'h',
    keyEN_SHIFT: 'H',
    keyRU: 'р',
    keyRU_SHIFT: 'Р',
    code: 'KeyH',
  },
  {
    key: 'j',
    keyEN_SHIFT: 'J',
    keyRU: 'о',
    keyRU_SHIFT: 'О',
    code: 'KeyJ',
  },
  {
    key: 'k',
    keyEN_SHIFT: 'K',
    keyRU: 'л',
    keyRU_SHIFT: 'Л',
    code: 'KeyK',
  },
  {
    key: 'l',
    keyEN_SHIFT: 'L',
    keyRU: 'д',
    keyRU_SHIFT: 'Д',
    code: 'KeyL',
  },
  {
    key: ';',
    keyEN_SHIFT: ':',
    keyRU: 'ж',
    keyRU_SHIFT: 'Ж',
    code: 'Semicolon',
  },
  {
    key: "'",
    keyEN_SHIFT: '"',
    keyRU: 'э',
    keyRU_SHIFT: 'Э',
    code: 'Quote',
  },
  {
    key: 'Enter',
    keyEN_SHIFT: 'Enter',
    keyRU: 'Enter',
    keyRU_SHIFT: 'Enter',
    code: 'Enter',
    system: true,
  },
  {
    key: 'Shift',
    keyEN_SHIFT: 'Shift',
    keyRU: 'Shift',
    keyRU_SHIFT: 'Shift',
    code: 'ShiftLeft',
    system: true,
  },
  {
    key: 'z',
    keyEN_SHIFT: 'Z',
    keyRU: 'я',
    keyRU_SHIFT: 'Я',
    code: 'KeyZ',
  },
  {
    key: 'x',
    keyEN_SHIFT: 'X',
    keyRU: 'ч',
    keyRU_SHIFT: 'Ч',
    code: 'KeyX',
  },
  {
    key: 'c',
    keyEN_SHIFT: 'C',
    keyRU: 'с',
    keyRU_SHIFT: 'С',
    code: 'KeyC',
  },
  {
    key: 'v',
    keyEN_SHIFT: 'V',
    keyRU: 'м',
    keyRU_SHIFT: 'М',
    code: 'KeyV',
  },
  {
    key: 'b',
    keyEN_SHIFT: 'B',
    keyRU: 'и',
    keyRU_SHIFT: 'И',
    code: 'KeyB',
  },
  {
    key: 'n',
    keyEN_SHIFT: 'N',
    keyRU: 'т',
    keyRU_SHIFT: 'Т',
    code: 'KeyN',
  },
  {
    key: 'm',
    keyEN_SHIFT: 'M',
    keyRU: 'ь',
    keyRU_SHIFT: 'Ь',
    code: 'KeyM',
  },
  {
    key: ',',
    keyEN_SHIFT: '<',
    keyRU: 'б',
    keyRU_SHIFT: 'Б',
    code: 'Comma',
  },
  {
    key: '.',
    keyEN_SHIFT: '>',
    keyRU: 'ю',
    keyRU_SHIFT: 'Ю',
    code: 'Period',
  },
  {
    key: '/',
    keyEN_SHIFT: '?',
    keyRU: '.',
    keyRU_SHIFT: ',',
    code: 'Slash',
  },
  {
    key: 'Shift',
    keyEN_SHIFT: 'Shift',
    keyRU: 'Shift',
    keyRU_SHIFT: 'Shift',
    code: 'ShiftRight',
    system: true,
  },
  {
    key: 'Control',
    keyEN_SHIFT: 'Control',
    keyRU: 'Control',
    keyRU_SHIFT: 'Control',
    code: 'ControlLeft',
    system: true,
  },
  {
    key: 'Alt',
    keyEN_SHIFT: 'Alt',
    keyRU: 'Alt',
    keyRU_SHIFT: 'Alt',
    code: 'AltLeft',
    system: true,
  },
  {
    key: ' ',
    keyEN_SHIFT: '',
    keyRU: '',
    keyRU_SHIFT: '',
    code: 'Space',
    system: true,
  },
  {
    key: 'Control',
    keyEN_SHIFT: 'Control',
    keyRU: 'Control',
    keyRU_SHIFT: 'Control',
    code: 'ControlRight',
    system: true,
  },
  {
    key: 'ArrowLeft',
    keyEN_SHIFT: 'ArrowLeft',
    keyRU: 'ArrowLeft',
    keyRU_SHIFT: 'ArrowLeft',
    code: 'ArrowLeft',
    system: true,
  },
  {
    key: 'ArrowUp',
    keyEN_SHIFT: 'ArrowUp',
    keyRU: 'ArrowUp',
    keyRU_SHIFT: 'ArrowUp',
    code: 'ArrowUp',
    system: true,
  },
  {
    key: 'ArrowDown',
    keyEN_SHIFT: 'ArrowDown',
    keyRU: 'ArrowDown',
    keyRU_SHIFT: 'ArrowDown',
    code: 'ArrowDown',
    system: true,
  },
  {
    key: 'ArrowRight',
    keyEN_SHIFT: 'ArrowRight',
    keyRU: 'ArrowRight',
    keyRU_SHIFT: 'ArrowRight',
    code: 'ArrowRight',
    system: true,
  },
];
export default keyInformation;
