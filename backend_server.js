const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/api/details", async (req, res) => {
  try {
    const response = await axios.get(
      "http://beam.healsec.com/api/v0/details"
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Not found: Details page data" });
  }
});

app.get("/api/details/", async (req, res) => {
  console.log("specific title details are");
  try {
    const response = await axios.get(
      "http://beam.healsec.com/api/v0/details/{title}"
    );
    res.json(response.data);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Not found: title details page" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8888, () => {
  console.log("Server is listening on port 8888");
});