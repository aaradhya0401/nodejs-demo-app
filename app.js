const http = require("node:http");

function getMessage() {
  return "Hello from my DevOps CI/CD pipeline!";
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>${getMessage()}</h1>`);
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
  });
}

module.exports = { getMessage };
