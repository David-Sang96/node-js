const http = require("http");
const fs = require("fs");
const port = 3010;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, "localhost", () => {
  console.log("server listening on port 3010");
});
