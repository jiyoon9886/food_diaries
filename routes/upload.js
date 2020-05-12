// Dependancies
var Express = require("express");
var multer = require("multer");
var bodyParser = require("body-parser");
var app = Express();
app.use(bodyParser.json());

// storage of image
var Storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./Images");
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

// uploading multiple images
var upload = multer({
  storage: Storage,
  //Field name and max count
}).array("imgUploader", 1);

// Route that the image will get uploaded to
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/upload.html");
});

app.post("/api/Upload", function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      return res.end("Something went wrong!");
    }
    return res.end("File uploaded sucessfully!.");
  });
});
