const express = require('express');
const createPath = require('./helpers/create-path');
const transliterate = require('./transliterator/transliteratorManager');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const urlencodedParser = express.urlencoded({limit: '50mb', extended: false}); //limit is for big text

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    let data = {
            text: "",
            srclang: "",
            resultlang: "",
            transliteratedText: "",
            direction: "",
        };
    let jsonData = JSON.stringify(data);
    response.render(createPath('index'), { jsonData });
});

app.post('/', urlencodedParser, (request, response) => {
    let data = {
        text: request.body.srctext,
        srclang: request.body.srclang,
        resultlang: request.body.resultlang
    };
    data = transliterate(data);
    let jsonData = JSON.stringify(data);
    response.render(createPath('reader'), { jsonData });
});

app.listen(PORT, (onerror) => {
    if(onerror) {
       console.log(onerror);
    } else {
       console.log("listening for server");
    }
});

app.use((req, res) => {
    let data = {
        text: "",
        srclang: "",
        resultlang: "",
        transliteratedText: ""
    };
    let jsonData = JSON.stringify(data);
    res.render(createPath('index'), { jsonData });
});