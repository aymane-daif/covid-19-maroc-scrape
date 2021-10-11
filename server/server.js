const express = require('express');

const { scrapeData } = require('./scrape');

const app = express(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '😷💊💉',
  });
});

app.get('/api/covid/results', (req, res) => {
  scrapeData().then((scrapedData) => res.json(scrapedData));
});

const PORT = process.env.PORT || 1947;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
