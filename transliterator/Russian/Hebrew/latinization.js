const blockSymbol = "׆";

const russianLetters = [
    'а', 'А', 'б', 'Б', 'в', 'В', 'г', 'Г', 'д', 'Д',
    'е', 'Е', 'ё', 'Ё', 'ж', 'Ж', 'з', 'З', 'и', 'И',
    'й', 'Й', 'к', 'К', 'л', 'Л', 'м', 'М', 'н', 'Н',
    'о', 'О', 'п', 'П', 'р', 'Р', 'с', 'С', 'т', 'Т',
    'у', 'У', 'ф', 'Ф', 'х', 'Х', 'ц', 'Ц', 'ч', 'Ч',
    'ш', 'Ш', 'щ', 'Щ', 'ъ', 'Ъ', 'ы', 'Ы', 'ь', 'Ь',
    'э', 'Э', 'ю', 'Ю', 'я', 'Я'
];

const latinLetters = [
    'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E',
    'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J',
    'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O',
    'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T',
    'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y',
    'z', 'Z'
];

const russianToLatin = new Map([ //after consonants
    ["а", "a"], ["А", "A"],     ["б", "b"], ["Б", "B"],     ["в", "v"], ["В", "V"],
    ["г", "g"], ["Г", "G"],     ["д", "d"], ["Д", "D"],     ["е", "e"], ["Е", "E"], //here is the difference
    ["ё", "o"], ["Ё", "o"],     ["ж", "w"], ["Ж", "W"],     ["з", "z"], ["З", "Z"],
    ["и", "i"], ["И", "I"],     ["й", "j"], ["Й", "J"],     ["к", "k"], ["К", "K"],
    ["л", "l"], ["Л", "L"],     ["м", "m"], ["М", "M"],     ["н", "n"], ["Н", "N"],
    ["о", "o"], ["О", "O"],     ["п", "p"], ["П", "P"],     ["р", "r"], ["Р", "R"],
    ["с", "s"], ["С", "S"],     ["т", "t"], ["Т", "T"],     ["у", "u"], ["У", "U"],
    ["ф", "f"], ["Ф", "F"],     ["х", "h"], ["Х", "H"],     ["ц", "c"], ["Ц", "C"],
    ["ч", "y"], ["Ч", "Y"],     ["ш", "x"], ["Ш", "X"],     ["щ", "q"], ["Щ", "Q"],
    ["ъ", ""], ["Ъ", ""],       ["ы", "i"], ["Ы", "I"],     ["ь", ""], ["Ь", ""],
    ["э", "e"], ["Э", "E"],     ["ю", "u"], ["Ю", "U"],     ["я", "a"], ["Я", "A"], //here is the difference
]);


function isPalatal(value){
    const palatal = /[жЖчЧшШщЩлЛ]/;
    return palatal.test(value);
}
function isCyrillic(value){
    const cyrillic = /[а-яА-ЯёЁ]/;
    return cyrillic.test(value);
}
function isFistWordLetter(index, array){ //used just after isCyrillic, so we know that it is letter
    return index == 0 || !isCyrillic(array[index-1]);
}
function isNonconsonant(value){
    const vowels = /[аАеЕёЁиИоОуУъЪыЫьЬэЭюЮяЯ]/;
    return vowels.test(value);
}
function isIotatedSmall(value){
    const iotatedSmall = /[еёюя]/;
    return iotatedSmall.test(value);
}
function isIotatedBig(value){
    const iotatedBig = /[ЕЁЮЯ]/;
    return iotatedBig.test(value);
}
function isRussianE(value){
    return /[еЕ]/.test(value);
}


function latinize(array) {
    let transliteratedArray = array.map((value, index, array) => {
        if (value.startsWith(blockSymbol) || !isCyrillic(value)) return value; //noncyrillic and blocked symbols are returning as they are
        if ((isFistWordLetter(index, array) || isNonconsonant(array[index - 1])) && isIotatedBig(value)) { //looking for first iotated letters or letters after 'vowels'
            return "J" + russianToLatin.get(value.toLowerCase()); //it becomes second letter so it`s lowercased. there is a problem with whole uppercased words
        } else if ((isFistWordLetter(index, array) || isNonconsonant(array[index - 1])) && isIotatedSmall(value)) {
            return "j" + russianToLatin.get(value);
        } else if (isIotatedSmall(value) && !isPalatal(array[index - 1]) && !isRussianE(value)) { //not iotating between consonant and russian E and after palatal
            return "j" + russianToLatin.get(value);
        } else return russianToLatin.get(value);
    });

    let cuttedArray = [...transliteratedArray.join('')];

    return cuttedArray; //returns array cutted by single elements
}

module.exports = latinize;