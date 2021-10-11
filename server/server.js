const express = require('express');
const cors = require('cors');

const { scrapeData } = require('./scrape');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: '😷💊💉',
  });
});

app.get('/api/covid/results', async (req, res) => {
  let scrapedData = await scrapeData();
  res.json(scrapedData);
});

const PORT = process.env.PORT || 1947;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
