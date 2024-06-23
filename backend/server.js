const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json()); // Correctly using express.json()

app.get('/test', (req, res) => {
  res.status(200).send("<h1>Welcome Home</h1>");
});

const PORT =   process.env.PORTs;

app.listen(PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
