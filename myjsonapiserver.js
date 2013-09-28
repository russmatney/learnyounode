var http = require('http')
var url = require('url')
var moment = require('moment')

var server = http.createServer(function(req, res){
  if(req.method != 'GET') return res.end('GET PLEASE');

  res.writeHead(200, { 'Content-Type': 'application/json' });
  parsedUrl = url.parse(req.url, true);
  var iso = moment(parsedUrl.query.iso);
  if(parsedUrl.pathname == "/api/parsetime"){
    var time = {hour:iso.hour(),minute:iso.minute(),second:iso.second()};
    res.end(JSON.stringify(time));
  } else if (parsedUrl.pathname == "/api/unixtime") {
    var time = {unixtime: iso.valueOf()};
    res.end(JSON.stringify(time));
  }
});

server.listen(8000)
