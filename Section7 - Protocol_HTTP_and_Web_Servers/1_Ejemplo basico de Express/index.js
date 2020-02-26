const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./home.html");
const about = fs.readFileSync("./about.html");

const server = http.createServer((req, res) => {
  const { url } = req;
  console.log(url);
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(home);
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(about);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("Page Not Found");
  }

  res.end();
});

server.listen(8000);
