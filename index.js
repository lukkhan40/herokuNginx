const express = require("express");
require("dotenv");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
  console.log(`listen at port ${PORT}`);
});
