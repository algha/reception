const util = require('util')
var reply = require('./reply');
var UserInfo = require("./userinfo")

var info = new UserInfo();

var messenger = { };

var page = function(entry){
      entry = entry[0];
      let webhook_event = entry.messaging[0];
      var spid = webhook_event.sender.id;

      if (webhook_event.message && webhook_event.message.text) {
         reply.text("メッセージ届きました。有り難うございます。",spid);
         console.log("replyed message");
         info.Write(spid);
      }else{
          console.log("this is not respongding...");
      }
    }

var user = function(entry){
      console.log(util.inspect(entry, false, null))
      entry.forEach(function(entry) {
        //let webhook_event = entry.messaging[0];
      });
    }

messenger.eventInit = {
    page: page,
    user: user
}

module.exports = messenger
