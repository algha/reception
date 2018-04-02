module.exports = function( app ) {
    var express = require( "express" )
      , router = express.Router()



    /* Add router to middleware */
    app.use( '/google', router );
};
