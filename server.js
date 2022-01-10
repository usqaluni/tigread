const express = require('express');
const createPath = require('./helpers/create-path');
const transliterate = require('./transliteratorManager');
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const urlencodedParser = express.urlencoded({limit: '50mb', extended: false}); //limit is for big text

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render(createPath('index'));
});

app.post('/', urlencodedParser, (request, response) => {
    let data = {
        text: request.body.srctext,
        srclang: request.body.srclang,
        resultlang: request.body.resultlang,
        transliteratedText: "",
        direction: "",
        fontList: [""]
    };

    fs.readdir(path.resolve(__dirname, './public/fonts', request.body.resultlang), (err, files) => {
        if (err)
            console.log(err);
        else {
            data.fontList = files;
        }
    });
    data = transliterate(data);
    setTimeout(() => {
        let jsonData = JSON.stringify(data);
        response.render(createPath('reader'), {jsonData});
    }, 500);
});

app.listen(PORT, (onerror) => {
    if(onerror) {
        console.log(onerror);
    } else {
        console.log("Listening for server");
    }
});

app.use((req, res) => {
    res.render(createPath('index'));
});