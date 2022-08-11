const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const axios = require("axios");
const cors = require("cors");

app.use(cors());

app.get("/api/fetch", async (req, res) => {
  try {
    const config = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    };
    const { data } = await axios(config);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

const port = process.env.PORT;
app.listen(port, () => console.log("Listening on Port " + port));
