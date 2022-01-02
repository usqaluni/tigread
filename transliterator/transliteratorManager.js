//manager chooses the path of text processing

const manageRussianToYiddish = require('./RussianToYiddish/manager');
const manageRussianToHebrew = require('./RussianToHebrew/manager');
const manageRussianToGeorgian = require('./RussianToGeorgian/manager');


function transliteratorManager(data) {

    let text = data.text;

    switch (data.resultlang) {
        case "Hebrew":
            return  manageRussianToHebrew(text);
            break;
        case "Yiddish":
            return manageRussianToYiddish(text);
            break;
        case "Georgian":
            return manageRussianToGeorgian(text);
            break;
        default:
            return "";
            break;
    }
}

module.exports = transliteratorManager;