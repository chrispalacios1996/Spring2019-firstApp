const express = require("express");
const app     = express();
const http    = require("http").Server(app);
const bodyParser = require("body-parser");

 app.use("/", express.static("/"));
 app.use("/", express.static("./client"));
// following two lines are for body-parser so we can understand objects through
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:false}));

const port = 3000;

http.listen(port);
console.log("Express is now running on port " + port + ".");

//handling a POST request
app.post("/", (request, response) => {
 let dataReceived = request.body;
 let dataToSend = {
   message: "Hi, I received your message!"
 };

 console.log("someone made a reuqest");
 console.log("The requester sent the following to us: ", dataReceived);
 response.send("Hi, I received your message!");
});

app.post("/numberSaver", (request, response) => {
  let clientNumber = request.body.userNumber;

  console.log(clientNumber);

  response.send(200);
});
