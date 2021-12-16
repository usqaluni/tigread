const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.sendFile('/index');
});

app.listen(process.env.PORT, (onerror) => {
    if(onerror) {
       console.log(onerror);
    } else {
       console.log("listening for server");
    }
});