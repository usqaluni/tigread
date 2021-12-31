//this transliteration is from Russian to Georgian

const blockSymbol = "׆";


//---+++---+++---+++---+++---+++---+++---+++---+++---+++---+++

const russianLatToGeorgian = new Map([
    ["a", "ა"],     ["b", "ბ"],    ["v", "ვ"],
    ["g", "გ"],     ["d", "დ"],    ["e", "ე"],
    ["w", "ჟ"],     ["z", "ზ"],
    ["i", "ი"],     ["j", "ი"],    ["k", "კ"],
    ["l", "ლ"],     ["m", "მ"],    ["n", "ნ"],
    ["o", "ო"],     ["p", "პ"],    ["r", "რ"],
    ["s", "ს"],     ["t", "თ"],    ["u", "უ"],
    ["f", "ფ"],     ["h", "ხ"],    ["c", "წ"],
    ["y", "ჩ"],     ["x", "შ"],    ["q", "შ"],
    ["dw", "ჯ"],    ["dz", "ძ"],
]);

const russianLatToGeorgianSecond = new Map([
    ["a", "ა"],     ["b", "ბ"],    ["v", "ვ"],
    ["g", "ღ"],     ["d", "დ"],    ["e", "ე"],
    ["w", "ჟ"],     ["z", "ზ"],
    ["i", "ი"],     ["j", "ი"],    ["k", "ყ"],
    ["l", "ლ"],     ["m", "მ"],    ["n", "ნ"],
    ["o", "ო"],     ["p", "პ"],    ["r", "რ"],
    ["s", "ს"],     ["t", "ტ"],    ["u", "უ"],
    ["f", "ფ"],     ["h", "ჰ"],    ["c", "ც"],
    ["y", "ჭ"],     ["x", "შ"],    ["q", "შ"],
    ["dw", "ჯ"],    ["dz", "ძ"],
]);

//---+++---+++---+++---+++---+++---+++---+++---+++---+++---+++

function isLetter(value) {
    return /[a-zA-Z]/.test(value);
}
//looking for digraphes
function isDw(value, index, array) {
    return /[dD]/.test(value) && /[wW]/.test(array[index + 1]);
}
function isDz(value, index, array) {
    return /[dD]/.test(value) && /[zZ]/.test(array[index + 1]);
}

//---+++---+++---+++---+++---+++---+++---+++---+++---+++---+++

function transliteration(array) {

    let passNext = false; //passing after block symbol and diphthongs
    let passAndDeleteNext = false; //passing after digraphes and deleting next letter

    let secondOn = false; //to use all letters

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
        } else if(isDw(value, index, array)) {
            passAndDeleteNext = true;
            return russianLatToGeorgian.get("dw");
        } else if(isDz(value, index, array)) {
            passAndDeleteNext = true;
            return russianLatToGeorgian.get("dz");
        } else if(secondOn) {
            secondOn = false;
            return russianLatToGeorgianSecond.get(value.toLowerCase());
        } else {
            secondOn = true;
            return russianLatToGeorgian.get(value.toLowerCase());
        }
    });
    return transliterated;
}

module.exports = transliteration;