//manager chooses the path of text processing

const manageRussianToYiddish = require('./RussianToYiddish/manager');
const manageRussianToHebrew = require('./RussianToHebrew/manager');
const manageRussianToGeorgian = require('./RussianToGeorgian/manager');


function transliteratorManager(data) {

    let text = data.text;

    switch (data.resultlang) {
        case "hebrew":
            return  manageRussianToHebrew(text);
            break;
        case "yiddish":
            return manageRussianToYiddish(text);
            break;
        case "georgian":
            return manageRussianToGeorgian(text);
            break;
        default:
            return "";
            break;
    }
}

module.exports = transliteratorManager;