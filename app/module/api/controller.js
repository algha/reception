const util = require('util')
var  ngrok = require('ngrok'),
    google = require('../google/lib/google.js'),
     reply = require('../messenger/util/reply');
 UserInfo = require("../messenger/util/userinfo")

var     info = new UserInfo();

var controller = {}

controller.report = function(req, res){
  var text = req.query.text;
  if (text === undefined || text == "") {
      res.send({"status":false,"message":"レポート内容を受付出来ませんでした。"});
      return;
  }

  // console.log("google");
  // google(text);

  var callback = function(users){
    for (var i = 0; i < users.length; i++) {
        reply.text(text,users[i].spid);
    }
  }
  info.Read(callback);

  res.send({"status":true,"message":"社員に伝えました。"});

}





module.exports =  controller;
