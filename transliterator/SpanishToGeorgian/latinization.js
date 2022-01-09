//this latinization is for Spanish

const spanishToLatin = new Map([  // [spanish, transcription]
    ["A", "A"], ["a", "a"],    ["B", "B"], ["b", "b"],    ["C", "K"], ["c", "k"],
    ["D", "D"], ["d", "d"],    ["E", "E"], ["e", "e"],    ["F", "F"], ["f", "f"],
    ["G", "G"], ["g", "g"],    ["H", ""], ["h", ""],      ["I", "I"], ["i", "i"],
    ["J", "H"], ["j", "h"],    ["K", "K"], ["k", "k"],    ["L", "L"], ["l", "l"],
    ["M", "M"], ["m", "m"],    ["N", "N"], ["n", "n"],    ["Ñ", "Nj"],["ñ", "nj"],
    ["O", "O"], ["o", "o"],    ["P", "P"], ["p", "p"],    ["Q", "K"], ["q", "k"],
    ["R", "R"], ["r", "r"],    ["S", "S"], ["s", "s"],    ["T", "T"], ["t", "t"],
    ["U", "U"], ["u", "u"],    ["V", "B"], ["v", "b"],    ["W", "V"], ["w", "v"],
    ["X", "Ks"],["x", "ks"],   ["Y", "J"], ["y", "j"],    ["Z", "S"], ["z", "s"],
]);

function isLetter(value) {
    return /[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ]/.test(value);
}
function isFistWordLetter(index, array){
    return isLetter(array[index]) && (index === 0 || !isLetter(array[index - 1]));
}
function isLastWordLetter(index, array){
    return isLetter(array[index]) && (index === (array.length - 1) || !isLetter(array[index + 1]));
}
function isSingleLetterWord(index, array) {
    return isFistWordLetter(index, array) && isLastWordLetter(index, array);
}
function isMiddleLetter(index, array) {
    return !isFistWordLetter(index, array) && !isLastWordLetter(index, array);
}
function isVowel(value) {
    return /[aAeEiIoOuUáÁéÉíÍóÓúÚüÜ]/.test(value);
}
function replaceStressedVowels(value) {
    switch (value) {
        case "á":
            return "a";
            break;
        case "Á":
            return "A";
            break;
        case "é":
            return "e";
            break;
        case "É":
            return "E";
            break;
        case "í":
            return "i";
            break;
        case "Í":
            return "I";
            break;
        case "ó":
            return "o";
            break;
        case "Ó":
            return "O";
            break;
        case "ü":
            return "u";   // removeU is not approach this letter, because it will be changed after
            break;
        case "Ü":
            return "U";
            break;
        case "ú":
            return "u";
            break;
        case "Ú":
            return "U";
            break;
        default:
            return value;
            break;
    }
}
function replaceConsonants(value) {
    switch (value) {
        case "Ñ":
            return "Nj";
            break;
        case "ñ":
            return "nj";
            break;
        case "J":
            return "H";
            break;
        case "j":
            return "h";
            break;
        case "H":
            return "";
            break;
        case "h":
            return "";
            break;
        case "X":
            return "Ks";
            break;
        case "x":
            return "ks";
            break;
        case "W":
            return "v";
            break;
        case "w":
            return "v";
            break;
        case "Q":
            return "K";
            break;
        case "q":
            return "k";
            break;
        case "z":
            return "s";
            break;
        case "Z":
            return "S";
            break;
        default:
            return value;
            break;
    }
}

// for spanish "and" y
function isYy(value) {
    return /[yY]/.test(value);
}
function replaceY(value) {
    switch (value) {
        case "y":
            return "i";
            break;
        case "Y":
            return "Y";
            break;
        default:
            return value;
            break;
    }
}

// Remove U between (q, g) and (e, i)
function isUu(value) {
    return /[uU]/.test(value);
}
function isQqGg(value) {
    return /[qQgG]/.test(value);
}
function isEI(value) {
    return /[eEiI]/.test(value);
}
function removeU(value, index, array) {
    if(isQqGg(array[index - 1]) && isEI(array[index + 1])) {
        return "";
    }
    return value;
}

// ge gi -> hi. Place it before vowel transformation, not ot do gui -> hi -> hi
function isGg(value) {
    return /[gG]/.test(value);
}
function replaceGByH(value, index, array) {
    if(isEI(array[index + 1]) && value === "g") {
        return "h";
    } else if(isEI(array[index + 1]) && value === "G") {
        return "H";
    }
    return value;
}

// ch -> y, y -> j
function isCh(value, index, array) {
    return /[cC]/.test(value) && /[hH]/.test(array[index + 1]);
}
function replaceChByY(value) {
    switch (value) {
        case "c":
            return "y";
            break;
        case "C":
            return "Y";
        default:
            return value;
            break;
    }
}
function replaceYByJ(value) {
    switch (value) {
        case "y":
            return "j";
            break;
        case "Y":
            return "J";
            break;
        default:
            return value;
            break;
    }
}

// ce, ci -> se, si
function idCc(value) {
    return /[cC]/.test(value);
}
function isEI(value) {
    return /[eEiI]/.test(value);
}
function replaceCByS(value) {
    switch (value) {
        case "c":
            return "s";
            break;
        case "C":
            return "S";
            break;
        default:
            return value;
            break;
    }
}

function replaceCByK(value) {
    switch (value) {
        case "c":
            return "k";
            break;
        case "C":
            return "K";
            break;
        default:
            return value;
            break;
    }
}

// ll -> j
function isLl(value, index, array) {
    return /[lL]/.test(value) && /[lL]/.test(array[index + 1]);
}
function replaceLByJ(value) {
    switch (value) {
        case "l":
            return "j";
            break;
        case "L":
            return "J";
            break;
        default:
            return value;
            break;
    }
}

// sh -> x
function isSh(value, index, array) {
    return /[sS]/.test(value) && /[hH]/.test(array[index + 1]);
}
function replaceShByX(value) {
    switch (value) {
        case "s":
            return "x";
            break;
        case "S":
            return "X";
            break;
        default:
            return value;
            break;
    }
}

// ts -> c
function isTs(value, index, array) {
    return /[tT]/.test(value) && /[sS]/.test(array[index + 1]);
}
function replaceTsByC(value) {
    switch (value) {
        case "t":
            return "c";
            break;
        case "T":
            return "C";
            break;
        default:
            return value;
            break;
    }
}

// z -> s, z
function isZz(value) {
    return /[zZ]/.test(value);
}
function isVoicedConsonant(value) {
    return /[bBdDgGmMnNñÑrRvVwW]/.test(value);
}

// first or after m, n (b,v) -> b; other -> v
function isBV(value) {
    return /[bBvV]/.test(value);
}
function isMN(value) {
    return /[mMnN]/.test(value);
}
function replaceBVByB(value) {
    switch (value) {
        case "b":
            return "b";
            break;
        case "B":
            return "B";
            break;
        case "V":
            return "B";
            break;
        case "v":
            return "b";
            break;
        default:
            return value;
            break;
    }
}
function replaceBVByV(value) {
    switch (value) {
        case "b":
            return "v";
            break;
        case "B":
            return "V";
            break;
        case "V":
            return "V";
            break;
        case "v":
            return "v";
            break;
        default:
            return value;
            break;
    }
}

function latinize(array) {

    let passNext = false;

    let transliteratedArray = array.map((value, index, array) => {
        if (passNext) {
            passNext = false;
            return "";
        } else if (!isLetter(value)) {
            return value;
        } else if (isYy(value) && isSingleLetterWord(index, array)) {  // 'and' y -> i
            return replaceY(value);
        } else if (isGg(value) && !isLastWordLetter(index, array)) { // g -> h
            return replaceGByH(value, index, array);
        } else if (isMiddleLetter(index, array) && isUu(value)) { // que, qui -> qe, qi
            return removeU(value, index, array);
        } else if (isVowel(value)) {                     // á... -> a...
            return replaceStressedVowels(value);
        } else if (isYy(value)) {       // y -> j
            return replaceYByJ(value);
        } else if (!isLastWordLetter(index, array) && isCh(value, index, array)) { // ch -> y
            passNext = true;
            return replaceChByY(value);
        } else if (idCc(value)) {                       // c -> s, k
            if(!isLastWordLetter(index, array) && isEI(array[index + 1])) {
                return replaceCByS(value);
            } else {
                return replaceCByK(value);
            }
        } else if (isSh(value, index, array)) {
            passNext = true;
            return replaceShByX(value);
        } else if (!isLastWordLetter(index, array) && isLl(value, index, array)) { // ll -> j
            passNext = true;
            return replaceLByJ(value);
        } else if (!isLastWordLetter(index, array) && isTs(value, index, array)) {
            passNext = true;
            return replaceTsByC(value);
        } else if (isZz(value) && !isLastWordLetter(index, array) && isVoicedConsonant(array[index + 1])) { // z -> z (more regular z -> s is in replaceConsonants)
            return value;
        } else if(isBV(value)){                                               // b,v -> initial and after m,n 'b', else 'v'
            if(isFistWordLetter(index, array) || isMN(array[index - 1])) {
                return replaceBVByB(value);
            } else {
                return replaceBVByV(value);
            }
        } else {
            return replaceConsonants(value);
        }

        /*if (value.startsWith(blockSymbol) || !isCyrillic(value)) return value; //noncyrillic and blocked symbols are returning as they are

        if((isFistWordLetter(index, array) || isNonconsonant(array[index - 1])) && isIotatedBig(value)) { //looking for first iotated letters or letters after 'vowels'
            return "J" + spanishToLatin.get(value.toLowerCase()); //it becomes second letter so it`s lowercased. there is a problem with whole uppercased words
        } else if((isFistWordLetter(index, array) || isNonconsonant(array[index - 1])) && isIotatedSmall(value)) {
            return "j" + spanishToLatin.get(value);
        } else if(isIotatedSmall(value) && !isPalatal(array[index - 1]) && !isRussianE(value)) { //not iotating between consonant and russian E and after palatal
            return "j" + spanishToLatin.get(value);
        } else if(isIotatedBig(value) && !isPalatal(array[index - 1]) && !isRussianE(value)) {
            return "J" + spanishToLatin.get(value);
        } else return spanishToLatin.get(value);
         */

    });

    let cuttedArray = [...transliteratedArray.join('')];

    return cuttedArray; //returns array cutted by single elements
}

module.exports = latinize;