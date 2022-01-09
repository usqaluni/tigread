//Spanishh --> Georgian

const latinize = require('./latinization');
const cut = require('./cutter');
const transliterate = require('./transliteration');

function manageRussianToGeorgian(text) {
    let cutted = cut(text);
    let latinized = latinize(cutted);
    let transliterated = transliterate(latinized);
    let joined =  transliterated.join('');

    return joined;
}

module.exports = manageRussianToGeorgian;