// server/index.js

const express = require("express");
var cors = require('cors')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;


//creates an endpoint for the route /api
app.get("/api", (req, res) => {
  res.json({ message: "Response from server" });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
