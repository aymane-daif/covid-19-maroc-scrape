const express = require('express');
const cors = require('cors');
const path = require('path');

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

// serve static assaets if where are in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 1947;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
