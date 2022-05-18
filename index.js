const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Tyep": "text/plain" });
  res.end(JSON.stringify({ id: 1, name: "John" }));
});

server.listen(PORT, () => {
  console.log(`Server running and listening on ${PORT}`);
});
