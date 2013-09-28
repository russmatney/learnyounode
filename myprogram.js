var fs = require('fs');
var dir = process.argv[2];
var filter = process.argv[3];
var mymodule = require('./mymodule');

mymodule(dir, filter, function(err, list){
  if(err) return console.log(err);

  list.forEach(function(file){
    console.log(file);
  });
});
