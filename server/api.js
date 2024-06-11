const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000; //use value from env variables if available, else use port 5000

app.get("", async (req, res) => {
    try {
      res.json("testing")
    } catch (err) {
      res.status(500).json({ error: 'Error fetching data' }); // Handle any errors
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
