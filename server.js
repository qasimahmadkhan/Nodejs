const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action = "message" method = "POST"><input  type = "text" name = "message"><button type = "submit">Send</button></form><body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method ==='POST'){
    fs.writeFileSync('message.txt','Dummy text');
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
  } 
  res.write("<html>");
  res.write("<head><title>Hello Qasim nodejs server<head></title>");
  res.write("<body><h1>the server</h1><body>");
  res.write("</html>");
});
server.listen(3000);
// process.exit();
