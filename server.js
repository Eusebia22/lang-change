const express = require('express');
const path = require("path");
const app = express();
// const PORT = 3000;





// Serve static files (e.g., JSON, JS, CSS)
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// Route for the index page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route for the contact page
app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

// Route for the sign-up page
app.get("/inscription.html", (req, res) => {
  res.sendFile(path.join(__dirname, "inscrire.html"));
});

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });