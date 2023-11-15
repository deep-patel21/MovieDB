
const cors = require('cors');

const express = require('express');
const droptables = require('./DropTables');

const app = express();
const port = 3001; //server port is different from frontend

app.use(cors());

app.post('/api/DropTables', async (req, res) => {
  try {
    await droptables();
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
