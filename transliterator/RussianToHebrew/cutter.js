//cuts text by spaces and punctuation
const XRegExp = require("XRegExp");
const blockLatin = require('./blocker');

function cut(text) {
    return [...text]; //returns array
}

module.exports = cut;