const express = require("express");
const fs = require("fs");

const app = express();
const port = 6500;

//get route
app.get("/getContacts", (req, res) => {
  fs.readFile("database.json", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(JSON.parse(result));
    }
  });
});

//server listen on port
app.listen(port, (err) => {
  if (err) {
    console.log("error listening on port:", port);
    return;
  }
  console.log("server is running on port:", port);
});
