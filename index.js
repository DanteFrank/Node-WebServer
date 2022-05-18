const http = require("http");

const PORT = 3000;


const server = http.createServer((req, res) => {
  if (req.url === "/friends") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ id: 1, name: "John" }));
  } else if (req.url === "/messages") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><body><ul><li>Message 1</li><li>Message 2</li></ul></body></html>"
    );
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running and listening on ${PORT}`);
});
