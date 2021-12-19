const express = require('express');
const createPath = require('./helpers/create-path');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const urlencodedParser = express.urlencoded({extended: false});

app.get('/', (request, response) => {
    let data = {
        text: "",
        srclang: "russian",
        resultlang: "hebrew",
        transliteratedText: ""
    };
    response.render(createPath('index'), { data });
});

app.post('/', urlencodedParser, (request, response) => {
 let data = {
     text: request.body.srctext,
     srclang: request.body.srclang,
     resultlang: request.body.resultlang
 };
 //let transliteratedText = transliterate(data);
    data.transliteratedText = data.text + " 333";
    console.log(data);
 response.render(createPath('index'), { data });
});

app.listen(PORT, (onerror) => {
    if(onerror) {
       console.log(onerror);
    } else {
       console.log("listening for server");
    }
});