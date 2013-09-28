var fs = require('fs');

module.exports = function(dir, filter, callback){

  fs.readdir(dir, function(err, list){
    if(err) return callback(err);

    var reggie = new RegExp("\\." + filter + "$");

    list = list.filter(function(file) {
      return reggie.test(file);
    });
    callback(null, list);
  });
};
