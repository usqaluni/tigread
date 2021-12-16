const express = require('express');
const createPath = require('./helpers/create-path');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.sendFile(createPath('index'));
});

app.get('/library', (req, res) => {
    res.sendFile(createPath('library'));
});

app.listen(process.env.PORT, (onerror) => {
    if(onerror) {
       console.log(onerror);
    } else {
       console.log("listening for server");
    }
});