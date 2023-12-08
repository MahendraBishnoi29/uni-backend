const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());

app.use(express.json());

app.get("/api/universities/search", async (req, res) => {
  const { country } = req.query;
  console.log("CC", country);
  try {
    const response = await fetch(
      ` http://universities.hipolabs.com/search?country=${country}`
    );
    const data = await response.json();
    console.log("data ", data);
    res.json(data);
    console.log("data ", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
