const express = require("express");
const app = express();

// Example route
app.get("/", (req, res) => {
  res.send("Hello, Rajesh! Your server is running.");
});

// Listen on all interfaces (important!)
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running at http://0.0.0.0:3000");
});
