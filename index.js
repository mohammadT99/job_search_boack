const express = require("express");

const app = express();

app.listen(8080, (err) => {
  console.log(`http://localhost:8080`);
  if (err) {
    console.log("sdsd");
  }
});
