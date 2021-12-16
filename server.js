const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('Hello!');
});

app.listen(process.env.PORT, (onerror) => {
    if(onerror) {
       console.log(onerror);
    } else {
       console.log("listening for server");
    }
});