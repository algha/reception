var ngrok = require('ngrok');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var serverPort = 3000;

app.use(bodyParser.json());


require('./app/app')(app)






app.listen(serverPort,function(){
    ngrok.connect(serverPort, function (err, url) {
        console.log('Endpoints:');
        console.log('    ' + url + '/api/report?text=こんにちは&key=77a03108d217279bd763b3e2c8b975cbca51f235');
        console.log('GET example:');
        console.log('curl -X GET ' + url + '/api/report?text=こんにちは&key=77a03108d217279bd763b3e2c8b975cbca51f235');
        console.log('POST example:');
        console.log('curl -X POST -d "text=Hello Google Home" ' + url + '//api/report?text=こんにちは&key=77a03108d217279bd763b3e2c8b975cbca51f235');
        });
});
console.log('luanch with port:'+serverPort);
