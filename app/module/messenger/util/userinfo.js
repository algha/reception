var fs       = require('fs'),
    jsonFile =  './users.json';

class UserInfo{

  constructor(){

  }

 Read(callback){
    var userData = [];
    fs.readFile(jsonFile,function(err,content){
     if(err) throw err;
     var data = JSON.parse(content);
      for(var i = 0; i<data.users.length; i++){
        userData.push(data.users[i]);
      }
      callback(userData);
    })
  }

 Write(spid){
   var _this = this;
    fs.readFile(jsonFile,function(err,content){
      if(err) throw err;
      var data = JSON.parse(content);
          if(_this.Check(data.users,spid) == true ){
             data.users.push({spid:spid})
          }
          fs.writeFile(jsonFile,JSON.stringify(data),function(err){
           if(err) throw err;
          })
     })
   }

 Check(data,spid){
    for(var i=0; i<data.length; i++){
     if(data[i].spid == spid){
      return false
     }
    }
    return true;
  }
}


module.exports = UserInfo;
