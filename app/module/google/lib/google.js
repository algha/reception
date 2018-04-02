
var ngrok = require('ngrok');
var bodyParser = require('body-parser');
const googlehome = require('./google-home-notifier')
const language = 'ja';

googlehome.device('Google-Home', language);
//googlehome.ip('192.168.1.60', language);

module.exports = function(text){
  googlehome.notify(text, function(res) {
      console.log(res);
  });
}
