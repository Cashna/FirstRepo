var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', (req, res) => {
  res.send('Hello Express app!');
});

const axios = require('axios');
async function getData() {
  const date = new Date().toLocaleString('sv').replace(/\D/g, '').slice(0,8);
  const res = await axios.get('https://api.abema.io/v1/media?dateFrom=' + date + '&dateTo=' + date, {
      headers: {
        'Authorization': 'Bearer ' + process.env.accesstoken
      }
    });
  const data = res.data;
  return data;
}

app.get('/channels', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules;
  res.send(obj);
});
app.get('/channels/abema-news', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'abema-news');
  res.send(obj);
});
app.get('/channels/news-plus', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'news-plus');
  res.send(obj);
});
app.get('/channels/abema-special', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'abema-special');
  res.send(obj);
});
app.get('/channels/special-plus', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'special-plus');
  res.send(obj);
});
app.get('/channels/abema-anime', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'abema-anime');
  res.send(obj);
});
app.get('/channels/abema-anime-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'abema-anime-2');
  res.send(obj);
});
app.get('/channels/drama', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'drama');
  res.send(obj);
});
app.get('/channels/drama-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'drama-2');
  res.send(obj);
});
app.get('/channels/80s-anime-1', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === '80s-anime-1');
  res.send(obj);
});
app.get('/channels/special-plus-7', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'special-plus-7');
  res.send(obj);
});
app.get('/channels/90s-anime-1', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === '90s-anime-1');
  res.send(obj);
});
app.get('/channels/00s-anime-1', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === '00s-anime-1');
  res.send(obj);
});
app.get('/channels/doraemon-special', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'doraemon-special');
  res.send(obj);
});
app.get('/channels/family-anime-1', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'family-anime-1');
  res.send(obj);
});
app.get('/channels/family-anime-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'family-anime-2');
  res.send(obj);
});
app.get('/channels/asia-drama', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'asia-drama');
  res.send(obj);
});
app.get('/channels/asia-love-comedy', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'asia-love-comedy');
  res.send(obj);
});
app.get('/channels/asia-loveromance', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'asia-loveromance');
  res.send(obj);
});
app.get('/channels/asia-historical', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'asia-historical');
  res.send(obj);
});
app.get('/channels/abema-anime-3', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'abema-anime-3');
  res.send(obj);
});
app.get('/channels/asia-drama-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'asia-drama-2');
  res.send(obj);
});
app.get('/channels/k-world', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'k-world');
  res.send(obj);
});
app.get('/channels/anime-live', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'anime-live');
  res.send(obj);
});
app.get('/channels/anime-live2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'anime-live2');
  res.send(obj);
});
app.get('/channels/anime-live3', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'anime-live3');
  res.send(obj);
});
app.get('/channels/mahjong', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'mahjong');
  res.send(obj);
});
app.get('/channels/shogi', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'shogi');
  res.send(obj);
});
app.get('/channels/world-sports', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'world-sports');
  res.send(obj);
});
app.get('/channels/world-sports-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'world-sports-2');
  res.send(obj);
});
app.get('/channels/sumo', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'sumo');
  res.send(obj);
});
app.get('/channels/fighting-sports', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'fighting-sports');
  res.send(obj);
});
app.get('/channels/hiphop', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'hiphop');
  res.send(obj);
});
app.get('/channels/commercial', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'commercial');
  res.send(obj);
});
app.get('/channels/keirin-auto', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'keirin-auto');
  res.send(obj);
});

app.listen(3000, () => {
  console.log('server started');
});

module.exports = app;
