const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.listen(port, function (req, res){
    console.log('Listening on port', port);
})

