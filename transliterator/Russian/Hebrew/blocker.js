//blocks latin words by putting blockSymbol in the beginning of every string with latin letters
//it helps not to transliterate this words after
const latinLetters = [
    'a', 'A',    'b', 'B',    'c', 'C',    'd', 'D',    'e', 'E',
    'f', 'F',    'g', 'G',    'h', 'H',    'i', 'I',    'j', 'J',
    'k', 'K',    'l', 'L',    'm', 'M',    'n', 'N',    'o', 'O',
    'p', 'P',    'q', 'Q',    'r', 'R',    's', 'S',    't', 'T',
    'u', 'U',    'v', 'V',    'w', 'W',    'x', 'X',    'y', 'Y',
    'z', 'Z'
];

const blockSymbol = "׆";

function blockLatin(array) {
    let blocked = array.map(value => {
        if (latinLetters.includes(value)) {
            return blockSymbol + value;
        } else return value;
    })
    return blocked; //returns array
}

module.exports = blockLatin; //returns string