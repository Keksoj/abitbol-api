var http = require("http");
var quotes = require("./quotes.json");


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
    var i = Math.floor(Math.random() * 70);
    var quote = quotes[i];
    res.write(quote);
    res.end();
  } else {
    res.end("Invalid Request!");
  }
});

// ouais mon port 3000 est déjà occupé par une autre appli
server.listen(4000);
console.log('api is running on http://localhost:4000/abitbol');