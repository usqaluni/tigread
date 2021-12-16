const express = require('express');

const app = express();

const PORT = process.env.POST || 3000;

app.get('/', (req, res) => {
   res.send('Hello!');
});

app.listen(PORT, (onerror) => {
    if(onerror) {
       console.log(onerror);
    } else {
       console.log("listening for server");
    }
});