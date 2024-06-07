const express = require("express");
const app = express();

const test = (url, callback) => {
   axios
     .get(url)
     .then((response) => {
       callback(null, response.data);
     })
     .catch((error) => {
       callback(error);
     });
};


app.get("/", (req, res) => {
  test("https://www.google.com/", (err, data) => {
    if (err)   return res.status(500).send("Error: "+ err);
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
