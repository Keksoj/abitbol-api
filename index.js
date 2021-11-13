var http = require("http");
var quotes = require("./quotes.json");
var port = process.env.PORT;


var server = http.createServer(function(req, res) {

  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><body><p>This API provides with french memes.</p></body></html>"
    );
    res.end();

  } else if (req.url == "/abitbol") {
    res.writeHead(200, { 
      "Content-Type": "text/html; charset=UTF-8",
      "Access-Control-Allow-Origin": '*'
    });

    // choose one random quote
    var i = Math.floor(Math.random() * 72);
    var quote = quotes[i];
    res.write(quote);
    res.end();
  } else {
    res.end("Invalid Request!");
  }
});

server.listen(port);
console.log(`api is running on`, server);