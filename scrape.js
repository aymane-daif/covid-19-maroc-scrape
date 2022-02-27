const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://www.worldometers.info/coronavirus/country/morocco/';

let cashedData = null;
let stats = {
  countryName: '',
  cases: [],
  deaths: [],
  recovers: [],
};
const scrapeData = async () => {
  if (cashedData) {
    return Promise.resolve(cashedData);
  }
  try {
    const { data } = await axios.get(URL);

    const $ = cheerio.load(data);

    const countryName = $($('h1')[0]).text().trim();
    const casesTitle = $($('#maincounter-wrap h1')[0]).text().trim();
    const casesValue = $($('#maincounter-wrap div.maincounter-number span')[0])
      .text()
      .trim();
    const deathsTitle = $($('#maincounter-wrap h1')[1]).text().trim();
    const deathsValue = $($('#maincounter-wrap div.maincounter-number span')[1])
      .text()
      .trim();
    const recoversTitle = $($('#maincounter-wrap h1')[2]).text().trim();
    const recoversValue = $(
      $('#maincounter-wrap div.maincounter-number span')[2]
    )
      .text()
      .trim();

    stats.countryName = countryName;
    stats.cases = [casesTitle, casesValue];
    stats.deaths = [deathsTitle, deathsValue];
    stats.recovers = [recoversTitle, recoversValue];

    cashedData = stats;
    return stats;
  } catch (err) {
    console.log(err.message);
    return { message: err.message };
  }
};

module.exports = { scrapeData };
