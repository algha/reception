module.exports = function(app){


  /*All routes here*/
  require( './module/google/route' )( app );
  require( './module/messenger/route' )( app );
  require( './module/api/route' )( app );

  app.get('/', function(req, res){
      //res.sendFile('./welcome.html');
      res.sendfile('./index.html');
  });




}
