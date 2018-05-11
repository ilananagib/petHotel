const express = require('express');
const app = express();
const port = process.env.PORT || 5000; 
const bodyParser = require('body-parser');
const PetHotelRouter = require('./routes/pethotel.router'); //connects router to server

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/pethotel', PetHotelRouter);

app.listen(port, function (req, res){
    console.log('Listening on port', port);
})

