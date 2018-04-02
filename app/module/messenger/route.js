module.exports = function( app ) {
    var express = require( "express" )
      , router = express.Router()
      , messenger = require( './controller/messenger' );

    /*  google home says something */
    router.get( '/webhook', messenger.webhookGet );
    router.post('/webhook', messenger.webhookPost );

    /* Add router to middleware */
    app.use( '/messenger', router );
};
