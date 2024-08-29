const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Endpoint to scrape HTML content from a URL
app.get('/scrape', async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send('URL query parameter is required');
  }

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching the URL');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
