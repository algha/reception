request = require('request')

var reply = {
  token:"",
  sendURL: "https://graph.facebook.com/v2.6/me/messages"
}

reply.text = function(text,sender){
  var messageData = {
     text:text
    }
    request({
     url: reply.sendURL,
     qs: {access_token:reply.token},
     method: 'POST',
     json: {
       recipient: {id:sender},
       message: messageData,
     }
    }, function(error, response, body) {
     if (error) {
       console.log('Error sending message: ', error);
     } else if (response.body.error) {
       console.log('Error: ', response.body.error);
     }
    });
}

module.exports = reply;

