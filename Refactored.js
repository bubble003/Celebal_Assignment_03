const express = require("express");
const axios = require("axios");
const app = express();


const test = async(url) => {
  const response = await axios.get(url);
  return response.data;
};

app.get("/", async (req, res) => {
  try {
    const data = await test("https://www.google.com/");
    res.send(data);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
