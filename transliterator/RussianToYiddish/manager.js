const latinize = require('./latinization');
const block = require('./blocker');
const cut = require('./cutter');
const transliterate = require('./transliteration');

function manageRussianToYiddish(text) {
    let cutted = cut(text);
    let blocked = block(cutted);
    let latinized = latinize(blocked);
    let transliterated = transliterate(latinized);
    let joined = transliterated.join('');

    return joined;
}

module.exports = manageRussianToYiddish;