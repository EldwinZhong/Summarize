const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sql = require('./db');

const app = express();

app.use(cors());

const { fetchData } = require('./retrieveFromDB');

app.get("", async (req, res) => {
    try {
      const users = await fetchData(); // Await the fetchData function to get the data
      res.json({ users }); // Send the users data as a response
    } catch (err) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

