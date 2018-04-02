
var messenger = require("../util/messenger");
const util = require('util')

var controller = {}

/*webhook for messenger APi*/
controller.webhookPost = function(req, res){
  let body = req.body;

  if (body.object === 'page') {
    messenger.eventInit.page(body.entry);
    res.status(200).send('EVENT_RECEIVED');
  } else if(body.object === 'user') {
    messenger.eventInit.user(body.entry);
  } else {
    res.sendStatus(404);
  }
}


/*webhook for messenger APi*/
controller.webhookGet = function(req, res){

  let VERIFY_TOKEN = "77a03108d217279bd763b3e2c8b975cbca51f235"

  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
}
module.exports =  controller;
