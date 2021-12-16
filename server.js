const express = require('express');
const createPath = require('./helpers/create-path');

const app = express();

app.get('/', (req, res) => {
   res.sendFile(createPath('index'));
});

app.listen(process.env.PORT, (onerror) => {
    if(onerror) {
       console.log(onerror);
    } else {
       console.log("listening for server");
    }
});