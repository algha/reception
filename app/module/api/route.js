module.exports = function( app ) {
    var express = require( "express" )
      , router = express.Router()
      , controller = require( './controller' );

    var key = "77a03108d217279bd763b3e2c8b975cbca51f235";/*sha1(Gaaboo0801)*/
    var AuthApi = function(req, res, next){
      if (req.query.key === key) {
        next();
      }else {
        res.send({"status":false,"messsage":"Apiを確認出来ませんでした。"});
      }
    }

    /*  google home says something */
    router.get( '/report', controller.report )
          .post( '/report', controller.report );

    /* Add router to middleware */
    app.use( '/api', AuthApi, router );
};
