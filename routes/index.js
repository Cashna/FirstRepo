var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', (req, res) => {
  res.send('Hello Express app!');
});

const axios = require('axios');
async function getData() {
  const date = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo',year: "numeric",month: "2-digit",day: "2-digit"}).replaceAll('/','');
  const res = await axios.get('https://api.abema.io/v1/media?dateFrom=' + date + '&dateTo=' + date, {
      headers: {
        'Authorization': 'Bearer ' + process.env.accesstoken
      }
    });
  const data = res.data;
  return data;
}

async function getComment(value) {
  const res = await axios.get('https://api.abema.io/v1/slots/' + value + '/comments?limit=20', {
    headers: {
      'Authorization': 'Bearer ' + process.env.accesstoken
    }
  });
  const Comment = res.data;
  return Comment;
}

app.get('/channels', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules;
  res.send(obj);
});
app.get('/channels/abema-news', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'abema-news');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/news-plus', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'news-plus');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/abema-special', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'abema-special');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/special-plus', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'special-plus');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/special-plus-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'special-plus-2');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/abema-anime', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'abema-anime');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/abema-anime-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'abema-anime-2');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/drama', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'drama');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/drama-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'drama-2');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/80s-anime-1', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === '80s-anime-1');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/special-plus-7', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'special-plus-7');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/90s-anime-1', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === '90s-anime-1');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/00s-anime-1', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === '00s-anime-1');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/doraemon-special', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'doraemon-special');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/family-anime-1', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'family-anime-1');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/family-anime-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'family-anime-2');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/asia-drama', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'asia-drama');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/asia-love-comedy', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'asia-love-comedy');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/asia-loveromance', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'asia-loveromance');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/asia-historical', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'asia-historical');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/abema-anime-3', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'abema-anime-3');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/asia-drama-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'asia-drama-2');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/k-world', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'k-world');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/anime-live', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'anime-live');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/anime-live2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'anime-live2');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/anime-live3', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'anime-live3');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/mahjong', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'mahjong');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/shogi', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'shogi');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/world-sports', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'world-sports');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/world-sports-1', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'world-sports-1');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/world-sports-2', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'world-sports-2');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/sumo', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'sumo');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/boxing', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'boxing');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/fighting-sports', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'fighting-sports');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/hiphop', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'hiphop');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/commercial', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'commercial');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/keirin-auto', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'keirin-auto');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/boatrace', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'boatrace');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/animejapan-red', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'animejapan-red');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/animejapan-green', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'animejapan-green');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/animejapan-blue', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'animejapan-blue');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});
app.get('/channels/baseball-anime', async (req, res) => {
  const rest = await getData();
  const obj = rest.channelSchedules.filter(x => x.channelId === 'baseball-anime');
  var date = new Date();
  var unixTimestamp = Math.floor(date.getTime() / 1000 );
  const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
  const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
  const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
  const comment = await getComment(JSON.parse(idObj).id);
  res.send(comment);
});

module.exports = app;
