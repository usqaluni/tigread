//manager chooses the path of text processing

const manageRussianToYiddish = require('./RussianToYiddish/manager');
const manageRussianToHebrew = require('./RussianToHebrew/manager');
const manageRussianToGeorgian = require('./RussianToGeorgian/manager');
const manageSpanishToGeorgian = require('./SpanishToGeorgian/manager');


function transliteratorManager(data) {

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