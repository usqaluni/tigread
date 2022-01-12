document.addEventListener('DOMContentLoaded', function() {

    //todo language data have to come from server
let languages = {
    Russian: ["Georgian", "Hebrew", "Yiddish"],
    Spanish: ["Georgian"]
};

let srclang = document.getElementById("srclang");
let resultlang = document.getElementById("resultlang");

function getOptionsList(languageList) {
    let htmlText = `<option disabled selected value="">Choose language</option>`;
if(Array.isArray(languageList)){
    for (let language of languageList) {
        htmlText += `<option value="${language}">${language}</option>`;
    }
} else {
    for (let language in languageList) {
        htmlText += `<option value="${language}">${language}</option>`;
    }
}

    return htmlText;
}

srclang.innerHTML = getOptionsList(languages);

srclang.onchange = () => {
    resultlang.innerHTML = getOptionsList(languages[srclang.value]);
    //resultlang.removeAttribute('disabled'); //disabled select is not required
    M.AutoInit();   //re-initialize select
}

});