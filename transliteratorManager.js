//manager chooses the path of text processing

const manageRussianToYiddish = require('./transliterator/Russian/Yiddish/manager');
const manageRussianToHebrew = require('./transliterator/Russian/Hebrew/manager');
const manageRussianToGeorgian = require('./transliterator/Russian/Georgian/manager');
const manageSpanishToGeorgian = require('./transliterator/Spanish/Georgian/manager');


function transliteratorManager(srcData) {

    let data = srcData;
    let text = data.text;

    switch (data.srclang) {
        case "Russian":
            switch (data.resultlang) {
                case "Hebrew":
                    data.transliteratedText = manageRussianToHebrew(text);
                    data.direction = "rtl";
                    break;
                case "Yiddish":
                    data.transliteratedText = manageRussianToYiddish(text);
                    data.direction = "rtl";
                    break;
                case "Georgian":
                    data.transliteratedText = manageRussianToGeorgian(text);
                    data.direction = "ltr";
                    break;
                default:
                    return "";
                    break;
            }
            break;
        case "Spanish":
            switch (data.resultlang) {
                case "Georgian":
                    data.transliteratedText = manageSpanishToGeorgian(text);
                    data.direction = "ltr";
                    break;
                default:
                    return "";
                    break;
            }
            break;
        default:
            return "";
            break;
    }

    return data;
}

module.exports = transliteratorManager;