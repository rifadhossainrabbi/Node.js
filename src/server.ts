import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server : Server = createServer((req: IncomingMessage, res: ServerResponse) => {
  // console.log("Request:", req);
  // console.log("Response:", res);
  // console.log(req.url)
  // console.log(req.method)
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    // console.log("This is root route");
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("Welcome to the root route");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Welcome to the root route" }));
    // why JSON.stringify() is used here because the response is being sent as a JSON object. The res.end() method expects a string or a buffer as its argument, so we need to convert the JavaScript object into a JSON string before sending it in the response. JSON.stringify() is used to convert the object into a JSON string format that can be sent over HTTP.
  } else if (url === "/about" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Welcome to the about route" }));
  }
  else {
    // console.log("This route is not defined");
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(5000, () => {
  console.log("Server is running on the port 5000")
});