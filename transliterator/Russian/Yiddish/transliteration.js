//this transliteration is from Russian to Yiddish

const blockSymbol = "׆";


//---+++---+++---+++---+++---+++---+++---+++---+++---+++---+++

const russianLatToYiddish = new Map([
    ["a", "אַ"],     ["b", "ב"],    ["v", "װ"],
    ["g", "ג"],     ["d", "ד"],    ["e", "ע"],
    ["w", "זש"],    ["z", "ז"],
    ["i", "י"],     ["j", "י"],    ["k", "ק"],
    ["l", "ל"],     ["m", "מ"],    ["n", "נ"],
    ["o", "אָ"],     ["p", "פּ"],    ["r", "ר"],
    ["s", "ס"],     ["t", "ט"],    ["u", "וּ"],
    ["f", "פֿ"],     ["h", "כ"],    ["c", "צ"],
    ["y", "טש"],    ["x", "ש"],    ["q", "שטש"],
    ["ej", "ײ"],    ["aj", "ײַ"],    ["oj", "ױ"],
]);

const russianLatToYiddishLast = new Map([
    ["a", "אַ"],     ["b", "ב"],    ["v", "װ"],
    ["g", "ג"],     ["d", "ד"],    ["e", "ע"],
    ["w", "זש"],    ["z", "ז"],
    ["i", "י"],     ["j", "י"],    ["k", "ק"],
    ["l", "ל"],     ["m", "ם"],    ["n", "ן"],
    ["o", "אָ"],     ["p", "פּ"],    ["r", "ר"],
    ["s", "ס"],     ["t", "ט"],    ["u", "וּ"],
    ["f", "ף"],     ["h", "ך"],    ["c", "ץ"],
    ["y", "טש"],    ["x", "ש"],    ["q", "שטש"],
    ["ej", "ײ"],    ["aj", "ײַ"],    ["oj", "ױ"],
]);

//---+++---+++---+++---+++---+++---+++---+++---+++---+++---+++

function isLetter(value) {
    return /[a-zA-Z]/.test(value);
}
function isVowel(value) {
    return /[aAeEiIoOuU]/.test(value);
}
function isFirstInArray(index) {
    return index === 0;
}
function isLastInArray(index, array) {
    return index === (array.length - 1);
}
function isSimilarConsonant(index, array){
    if (isLetter(array[index]) && !isVowel(array[index])) {
        return array[index] == array[index - 1];
    }
    return false;
}
function isFirstWordLetter(index, array) {
    return isFirstInArray(index) || !isLetter(array[index - 1]);
}
function isLastWordLetter(index, array) {
    return isLetter(array[index]) && (isLastInArray(index, array) || !isLetter(array[index + 1]));
}
function isAfterVowel(index, array) {
    return isVowel(array[index - 1]);
}
function isNeededAlef(value, index, array) {
    return (value.toLowerCase() === 'i' || value.toLowerCase() === 'u')
        && (isFirstWordLetter(index, array) || isAfterVowel(index, array));
}
function getAlefIfNecessary(value, index, array) {
    if(isNeededAlef(value, index, array) || ((isEj(value, index, array) || isAj(value, index, array) || isOj(value, index, array)) && isFirstWordLetter(index, array))) return "א";
    else return "";
}
//looking for diphthongs
function isEj(value, index, array) {
    return /[eE]/.test(value) && /[jJ]/.test(array[index + 1]);
}
function isAj(value, index, array) {
    return /[aA]/.test(value) && /[jJ]/.test(array[index + 1]);
}
function isOj(value, index, array) {
    return /[oO]/.test(value) && /[jJ]/.test(array[index + 1]);
}

//---+++---+++---+++---+++---+++---+++---+++---+++---+++---+++

function transliteration(array) {

    let passNext = false; //passing after block symbol and diphthongs
    let passAndDeleteNext = false; //passing after diphthongs and deleting J


    let transliterated = array.map((value, index, array) => {

        if(passNext) {
            passNext = false;
            return value;
        } else if(passAndDeleteNext){
            passAndDeleteNext = false;
                return "";
        } else if (value.includes(blockSymbol)) {
            let rgxBlockSymbol = new RegExp("[" + blockSymbol + "]");
            passNext = true;
            return value.replace(rgxBlockSymbol, '');
        } else if(!isLetter(value)){
             return value;
        } else if(isSimilarConsonant(index, array)) { //no gemination
            return "";
        } else if(isEj(value, index, array)) {
            passAndDeleteNext = true;
            return getAlefIfNecessary(value, index, array) + russianLatToYiddish.get("ej");
        } else if(isAj(value, index, array)) {
            passAndDeleteNext = true;
            return getAlefIfNecessary(value, index, array) + russianLatToYiddish.get("aj");
        } else if(isOj(value, index, array)) {
            passAndDeleteNext = true;
            return getAlefIfNecessary(value, index, array) + russianLatToYiddish.get("oj");
        } else if(isLastWordLetter(index, array)) {
            return getAlefIfNecessary(value, index, array) + russianLatToYiddishLast.get(value.toLowerCase());
        } else return getAlefIfNecessary(value, index, array) + russianLatToYiddish.get(value.toLowerCase());
    });
    return transliterated;
}

module.exports = transliteration;