const http = require("http");

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "John",
  },
  {
    id: 1,
    name: "Jane",
  },
  {
    id: 2,
    name: "Joe",
  },
];

const server = http.createServer((req, res) => {
  const items = req.url.split("/");

  // /friends/{id} => ['', 'friends', '{id}']
  if (items[1] === "friends") {
    res.writeHead(200, { "Content-Type": "application/json" });
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
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
