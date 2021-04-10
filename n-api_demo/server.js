var express = require("express");
var app = express();
var multer = require("multer");
var cors = require("cors");

app.use(cors());

// calling greet.node from build folder
const greetModule = require("./build/Release/greet");

// app.get("/", (request, response) =>
//   response.status(200).send(`${greetModule.greetHello("Nishant")}`)
// );

var storage = multer.diskStorage({
  filename: function (request, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

app.post("/call", function (request, response) {
  // simple execution of 'greetHello' function
  // response.status(200).send(`${greetModule.greetHello("Nishant")}`);

  upload(request, response, function (err) {
    if (err instanceof multer.MulterError) {
      return response.status(500).json(err);
    } else if (err) {
      return response.status(500).json(err);
    }
    return response
      .status(200)
      .send(`${greetModule.greetHello(request.file.originalname)}`);
  });
});

// Make the server to listen the port 5000
app.listen(5000, function () {
  console.log("App running on port 5000");
});
