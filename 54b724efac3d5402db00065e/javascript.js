decodeMorse = function(morseCode){
  let tran = { 
    "": " ",
    '...---...': "SOS",
    "-.-.--": "!",
    ".-.-.-": ".",
    '.-':     'A',
    '-...':   'B',
    '-.-.':   'C',
    '-..':    'D',
    '.':      'E',
    '..-.':   'F',
    '--.':    'G',
    '....':   'H',
    '..':     'I',
    '.---':   'J',
    '-.-':    'K',
    '.-..':   'L',
    '--':     'M',
    '-.':     'N',
    '---':    'O',
    '.--.':   'P',
    '--.-':   'Q',
    '.-.':    'R',
    '...':    'S',
    '-':      'T',
    '..-':    'U',
    '...-':   'V',
    '.--':    'W',
    '-..-':   'X',
    '-.--':   'Y',
    '--..':   'Z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  };
  return morseCode.split(" ").map(e => tran[e] ).join("").split("  ").join(" ").trim()
}