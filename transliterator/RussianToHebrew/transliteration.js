const blockSymbol = "׆";

const heb = {
    alef: "א", bet: "ב", gimel: "ג",
    dalet: "ד", hej: "ה", vav: "ו",
    zajin: "ז", xet: "ח", tet: "ט",
    jud: "י", kaf: "כ", kaf_sofit: "ך",
    lamed: "ל", mem: "מ", mem_sofit: "ם",
    nun: "נ", nun_sofit: "ן", samex: "ס",
    ajin: "ע", pej: "פ", pej_sofit: "ף",
    cadi: "צ", cadi_sofit: "ץ", quf: "ק",
    resh: "ר", shin: "ש", tav: "ת",
    geresh: "׳", nothing: "",
};


const latinLetters = [
    'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E',
    'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J',
    'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O',
    'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T',
    'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y',
    'z', 'Z'
];

const latinConsonants = [
    'b', 'B', 'c', 'C', 'd', 'D',
    'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J',
    'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N',
    'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T',
    'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y',
    'z', 'Z'
];

//---+++---+++---+++---+++---+++---+++---+++---+++---+++---+++

const russianToHebrew = new Map([
    ["a", heb.alef], ["A", heb.alef],     ["b", heb.bet], ["B", heb.bet],     ["v", heb.vav], ["V", heb.vav],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", heb.alef], ["E", heb.alef],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", (heb.alef + heb.jud)], ["I", (heb.alef + heb.jud)],     ["j", heb.jud], ["J", heb.jud],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem], ["M", heb.mem],     ["n", heb.nun], ["N", heb.nun],
    ["o", (heb.alef + heb.vav)], ["O", (heb.alef + heb.vav)],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", (heb.alef + heb.vav)], ["U", (heb.alef + heb.vav)],
    ["f", heb.pej], ["F", heb.pej],     ["h", heb.xet], ["H", heb.xet],     ["c", heb.cadi], ["C", heb.cadi],
    ["y", (heb.cadi + heb.geresh)], ["Y", (heb.cadi + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const singleLetterWord = new Map([
    ["a", (heb.alef + heb.hej)], ["A", (heb.alef + heb.hej)],     ["b", heb.bet], ["B", heb.bet],     ["v", heb.vav], ["V", heb.vav],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", (heb.alef + heb.hej)], ["E", (heb.alef + heb.hej)],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", (heb.alef + heb.jud)], ["I", (heb.alef + heb.jud)],     ["j", heb.jud], ["J", heb.jud],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem], ["M", heb.mem],     ["n", heb.nun], ["N", heb.nun],
    ["o", (heb.alef + heb.vav)], ["O", (heb.alef + heb.vav)],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", (heb.alef + heb.vav)], ["U", (heb.alef + heb.vav)],
    ["f", heb.pej], ["F", heb.pej],     ["h", heb.xet], ["H", heb.xet],     ["c", heb.cadi], ["C", heb.cadi],
    ["y", (heb.cadi + heb.geresh)], ["Y", (heb.cadi + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const firstLetter = new Map([
    ["a", heb.alef], ["A", heb.alef],     ["b", heb.bet], ["B", heb.bet],     ["v", heb.vav], ["V", heb.vav],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", heb.alef], ["E", heb.alef],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", (heb.alef + heb.jud)], ["I", (heb.alef + heb.jud)],     ["j", heb.jud], ["J", heb.jud],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem], ["M", heb.mem],     ["n", heb.nun], ["N", heb.nun],
    ["o", (heb.alef + heb.vav)], ["O", (heb.alef + heb.vav)],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", (heb.alef + heb.vav)], ["U", (heb.alef + heb.vav)],
    ["f", heb.pej], ["F", heb.pej],     ["h", heb.xet], ["H", heb.xet],     ["c", heb.cadi], ["C", heb.cadi],
    ["y", (heb.cadi + heb.geresh)], ["Y", (heb.cadi + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const middleLetter = new Map([
    ["a", heb.nothing], ["A", heb.nothing],     ["b", heb.bet], ["B", heb.bet],     ["v", (heb.vav + heb.vav)], ["V", (heb.vav + heb.vav)],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", heb.nothing], ["E", heb.nothing],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", heb.jud], ["I", heb.jud],     ["j", (heb.jud + heb.jud)], ["J", (heb.jud + heb.jud)],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem], ["M", heb.mem],     ["n", heb.nun], ["N", heb.nun],
    ["o", heb.vav], ["O", heb.vav],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", heb.vav], ["U", heb.vav],
    ["f", heb.pej], ["F", heb.pej],     ["h", heb.xet], ["H", heb.xet],     ["c", heb.cadi], ["C", heb.cadi],
    ["y", (heb.cadi + heb.geresh)], ["Y", (heb.cadi + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const middleAfterJ = new Map([
    ["a", heb.nothing], ["A", heb.nothing],     ["b", heb.bet], ["B", heb.bet],     ["v", (heb.vav + heb.vav)], ["V", (heb.vav + heb.vav)],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", heb.nothing], ["E", heb.nothing],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", heb.nothing], ["I", heb.nothing],     ["j", heb.nothing], ["J", heb.nothing],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem], ["M", heb.mem],     ["n", heb.nun], ["N", heb.nun],
    ["o", heb.vav], ["O", heb.vav],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", heb.vav], ["U", heb.vav],
    ["f", heb.pej], ["F", heb.pej],     ["h", heb.xet], ["H", heb.xet],     ["c", heb.cadi], ["C", heb.cadi],
    ["y", (heb.cadi + heb.geresh)], ["Y", (heb.cadi + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const middleAfterVowelLetter = new Map([
    ["a", heb.alef], ["A", heb.alef],     ["b", heb.bet], ["B", heb.bet],     ["v", (heb.vav + heb.vav)], ["V", (heb.vav + heb.vav)],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", heb.alef], ["E", heb.alef],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", (heb.alef + heb.jud)], ["I", (heb.alef + heb.jud)],     ["j", (heb.jud + heb.jud)], ["J", (heb.jud + heb.jud)],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem], ["M", heb.mem],     ["n", heb.nun], ["N", heb.nun],
    ["o", (heb.alef + heb.vav)], ["O", (heb.alef + heb.vav)],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", (heb.alef + heb.vav)], ["U", (heb.alef + heb.vav)],
    ["f", heb.pej], ["F", heb.pej],     ["h", heb.xet], ["H", heb.xet],     ["c", heb.cadi], ["C", heb.cadi],
    ["y", (heb.cadi + heb.geresh)], ["Y", (heb.cadi + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const middleAfterLabialVowel = new Map([
    ["a", heb.alef], ["A", heb.alef],     ["b", heb.bet], ["B", heb.bet],     ["v", heb.bet], ["V", heb.bet],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", heb.alef], ["E", heb.alef],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", (heb.alef + heb.jud)], ["I", (heb.alef + heb.jud)],     ["j", (heb.jud + heb.jud)], ["J", (heb.jud + heb.jud)],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem], ["M", heb.mem],     ["n", heb.nun], ["N", heb.nun],
    ["o", (heb.alef + heb.vav)], ["O", (heb.alef + heb.vav)],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", (heb.alef + heb.vav)], ["U", (heb.alef + heb.vav)],
    ["f", heb.pej], ["F", heb.pej],     ["h", heb.xet], ["H", heb.xet],     ["c", heb.cadi], ["C", heb.cadi],
    ["y", (heb.cadi + heb.geresh)], ["Y", (heb.cadi + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const middleNearLabialVowel = new Map([
    ["a", heb.nothing], ["A", heb.nothing],     ["b", heb.bet], ["B", heb.bet],     ["v", heb.bet], ["V", heb.bet],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", heb.nothing], ["E", heb.nothing],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", heb.jud], ["I", heb.jud],     ["j", (heb.jud + heb.jud)], ["J", (heb.jud + heb.jud)],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem], ["M", heb.mem],     ["n", heb.nun], ["N", heb.nun],
    ["o", heb.vav], ["O", heb.vav],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", heb.vav], ["U", heb.vav],
    ["f", heb.pej], ["F", heb.pej],     ["h", heb.xet], ["H", heb.xet],     ["c", heb.cadi], ["C", heb.cadi],
    ["y", (heb.cadi + heb.geresh)], ["Y", (heb.cadi + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const middleAfterI = new Map([
    ["a", heb.alef], ["A", heb.alef],     ["b", heb.bet], ["B", heb.bet],     ["v", (heb.vav + heb.vav)], ["V", (heb.vav + heb.vav)],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", heb.alef], ["E", heb.alef],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", (heb.alef + heb.jud)], ["I", (heb.alef + heb.jud)],     ["j", heb.jud], ["J", heb.jud],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem], ["M", heb.mem],     ["n", heb.nun], ["N", heb.nun],
    ["o", (heb.alef + heb.vav)], ["O", (heb.alef + heb.vav)],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", (heb.alef + heb.vav)], ["U", (heb.alef + heb.vav)],
    ["f", heb.pej], ["F", heb.pej],     ["h", heb.xet], ["H", heb.xet],     ["c", heb.cadi], ["C", heb.cadi],
    ["y", (heb.cadi + heb.geresh)], ["Y", (heb.cadi + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const lastLetter = new Map([
    ["a", heb.hej], ["A", heb.hej],     ["b", heb.bet], ["B", heb.bet],     ["v", heb.bet], ["V", heb.bet],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", heb.hej], ["E", heb.hej],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", heb.jud], ["I", heb.jud],     ["j", heb.jud], ["J", heb.jud],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem_sofit], ["M", heb.mem_sofit],     ["n", heb.nun_sofit], ["N", heb.nun_sofit],
    ["o", heb.vav], ["O", heb.vav],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", heb.vav], ["U", heb.vav],
    ["f", heb.pej_sofit], ["F", heb.pej_sofit],     ["h", heb.kaf_sofit], ["H", heb.kaf_sofit],     ["c", heb.cadi_sofit], ["C", heb.cadi_sofit],
    ["y", (heb.cadi_sofit + heb.geresh)], ["Y", (heb.cadi_sofit + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const lastAfterVowelLetter = new Map([
    ["a", (heb.alef + heb.hej)], ["A", (heb.alef + heb.hej)],     ["b", heb.bet], ["B", heb.bet],     ["v", heb.bet], ["V", heb.bet],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", (heb.alef + heb.hej)], ["E", (heb.alef + heb.hej)],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", (heb.alef + heb.jud)], ["I", (heb.alef + heb.jud)],     ["j", heb.jud], ["J", heb.jud],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem_sofit], ["M", heb.mem_sofit],     ["n", heb.nun_sofit], ["N", heb.nun_sofit],
    ["o", (heb.alef + heb.vav)], ["O", (heb.alef + heb.vav)],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", (heb.alef + heb.vav)], ["U", (heb.alef + heb.vav)],
    ["f", heb.pej_sofit], ["F", heb.pej_sofit],     ["h", heb.kaf_sofit], ["H", heb.kaf_sofit],     ["c", heb.cadi_sofit], ["C", heb.cadi_sofit],
    ["y", (heb.cadi_sofit + heb.geresh)], ["Y", (heb.cadi_sofit + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);
const lastAfterI = new Map([
    ["a", (heb.alef + heb.hej)], ["A", (heb.alef + heb.hej)],     ["b", heb.bet], ["B", heb.bet],     ["v", heb.bet], ["V", heb.bet],
    ["g", heb.gimel], ["G", heb.gimel],   ["d", heb.dalet], ["D", heb.dalet], ["e", (heb.alef + heb.hej)], ["E", (heb.alef + heb.hej)],
    ["w", (heb.zajin + heb.geresh)],      ["W", (heb.zajin + heb.geresh)],    ["z", heb.zajin], ["Z", heb.zajin],
    ["i", (heb.alef + heb.jud)], ["I", (heb.alef + heb.jud)],     ["j", heb.nothing], ["J", heb.nothing],     ["k", heb.quf], ["K", heb.quf],
    ["l", heb.lamed], ["L", heb.lamed],     ["m", heb.mem_sofit], ["M", heb.mem_sofit],     ["n", heb.nun_sofit], ["N", heb.nun_sofit],
    ["o", (heb.alef + heb.vav)], ["O", (heb.alef + heb.vav)],     ["p", heb.pej], ["P", heb.pej],     ["r", heb.resh], ["R", heb.resh],
    ["s", heb.samex], ["S", heb.samex],     ["t", heb.tet], ["T", heb.tet],     ["u", (heb.alef + heb.vav)], ["U", (heb.alef + heb.vav)],
    ["f", heb.pej_sofit], ["F", heb.pej_sofit],     ["h", heb.kaf_sofit], ["H", heb.kaf_sofit],     ["c", heb.cadi_sofit], ["C", heb.cadi_sofit],
    ["y", (heb.cadi_sofit + heb.geresh)], ["Y", (heb.cadi_sofit + heb.geresh)],     ["x", heb.shin], ["X", heb.shin], ["q", heb.shin], ["Q", heb.shin],
]);

//---+++---+++---+++---+++---+++---+++---+++---+++---+++---+++

function isLetter(value) {
    return /[a-zA-Z]/.test(value);
}
function isVowel(value) {
    return /[aAeEiIoOuU]/.test(value);
}
function isJ(value) {
    return /[jJ]/.test(value);
}
function isSimilarConsonant(index, array){
    if (isLetter(array[index]) && !isVowel(array[index])) {
        return array[index] == array[index - 1];
    }
    return false;
}
function isLabialVowel(value) {
    return /[oOuU]/.test(value);
}
function isFirstInArray(index) {
    return index === 0;
}
function isLastInArray(index, array) {
    return index === (array.length - 1);
}
function isFirstWordLetter(index, array) {
    return isFirstInArray(index) || !isLetter(array[index - 1]);
}
function isLastWordLetter(index, array) {
    return isLetter(array[index]) && (isLastInArray(index, array) || !isLetter(array[index + 1]));
}
function isSingleLetterWord(index, array){
    return isFirstWordLetter(index, array) && isLastWordLetter(index, array);
}
function isAfterVowel(index, array) {
    return isVowel(array[index - 1]);
}
function isNearLabialVowel(index, array) {
    return !isFirstWordLetter(index, array) &&
        !isLastWordLetter(index, array) &&
        (isLabialVowel(array[index - 1]) || isLabialVowel(array[index + 1]));
}
function isPreviousI(index, array) {
    return !isFirstWordLetter(index, array) && (array[index - 1] === 'i' || array[index - 1] === 'I');
}
function isPreviousJ(index, array) {
    return !isFirstWordLetter(index, array) && (array[index - 1] === 'j' || array[index - 1] === 'J');
}

//---+++---+++---+++---+++---+++---+++---+++---+++---+++---+++

function transliterate(array) {

    let passNext = false; //passing after blocksymbol

    let transliterated = array.map((value, index, array) => {

        if(passNext){
            passNext = false;
            return value;
        } else if (value.includes(blockSymbol)) {
            let rgxBlockSymbol = new RegExp("[" + blockSymbol + "]");
            passNext = true;
            return value.replace(rgxBlockSymbol, '');
        } else if(!isLetter(value)){
             return value;
        } else if(isSingleLetterWord(index, array)) {
            return singleLetterWord.get(value);
        } else if(isFirstWordLetter(index, array)) {
            return firstLetter.get(value);
        } else if(isSimilarConsonant(index, array)) { //no gemination
            return heb.nothing;
        } else if(isJ(value) && isPreviousI(index, array) && isNearLabialVowel(index, array)) { //not to double jud before vav
            return heb.nothing;
        } else if(isJ(value) && isAfterVowel(index, array) && index > 3 && isPreviousJ(index - 1, array) && !isFirstWordLetter(index - 2, array)){
            return heb.nothing;
        } else if(isJ(value) && !isLastWordLetter(index, array) && isLastWordLetter(index + 1, array)) {
            return heb.jud;
        } else if(isLabialVowel(array[index - 1]) && !isLastWordLetter(index, array)) {
            return middleAfterLabialVowel.get(value);
        } else if(isNearLabialVowel(index, array)) {
            return middleNearLabialVowel.get(value);
        } else if(isPreviousI(index, array) && !isLastWordLetter(index, array)) {
            return middleAfterI.get(value);
        } else if(isPreviousJ(index, array) && !isLastWordLetter(index, array)) {
            return middleAfterJ.get(value);
        } else if(isAfterVowel(index, array) && !isLastWordLetter(index, array)) {
            return middleAfterVowelLetter.get(value);
        } else if(isLastWordLetter(index, array) && isPreviousI(index, array)) {
            return lastAfterI.get(value);
        } else if(isLastWordLetter(index, array) && isAfterVowel(index, array)) {
            return lastAfterVowelLetter.get(value);
        } else if(isLastWordLetter(index, array)) {
            return lastLetter.get(value);
        } else {
            return middleLetter.get(value);
        }

        return value;

    });
    return transliterated;
}

module.exports = transliterate;