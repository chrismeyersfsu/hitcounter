// embed an img element in an HTML page, point it at this.

var http = require("http");
var fs = require('fs');

var port = 8080;

if ('HITCOUNTER_PORT' in process.env) {
  port = process.env['HITCOUNTER_PORT'];
}

http.createServer(function(request, response) {
  const { headers, method, url } = request;

  var date = new Date;
  var b64_gif = 'R0lGODlhAQABAJEAAP////////4BAgAAACH5BAQUAP8ALAAAAAABAAEAAAICRAEAOw==';

  console.log(date + " - " + url);
  
  response.writeHead(200, { "Content-Type": "image/gif" });
  response.write(Buffer.from(b64_gif, 'base64'), "binary");        
  response.end();
}).listen(port);

var date = new Date;
console.log(date + " - Server running at http://0.0.0.0:" + port);
