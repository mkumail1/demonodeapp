var express = require('express'),
    app = express(),
    port = process.env.PORT || '3000';

app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function () {
    console.log("Server started successfully on port:" + port);
});

