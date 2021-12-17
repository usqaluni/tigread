const express = require('express');
const createPath = require('./helpers/create-path');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render(createPath('index'));
});

app.post('/', (req, res) => {
  res.redirect(createPath('library'));
});

app.get('/library', (req, res) => {
    res.render(createPath('library'));
});

app.listen(PORT, (onerror) => {
    if(onerror) {
       console.log(onerror);
    } else {
       console.log("listening for server");
    }
});