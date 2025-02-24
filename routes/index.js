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

const channelNameArry = ['abema-anime',
                        'abema-anime-2',
                        'abema-anime-3',
                        'anime-special',
                        'anime-special-2',
                        'isekai-anime',
                        'isekai-anime-2',
                        'isekai-anime-3',
                        'lovecomedy-anime',
                        'dailylife-anime',
                        'late-night-anime',
                        'anime-live',
                        'anime-live2',
                        'anime-live3',
                        'atashinchi',
                        'doraemon-special',
                        'family-anime-1',
                        'family-anime-2',
                        'gundam',
                        '80s-anime-1',
                        '90s-anime-1',
                        '00s-anime-1',
                        'baseball-anime',
                        'abema-news',
                        'news-plus',
                        'abema-special',
                        'special-plus',
                        'special-plus-2',
                        'asia-drama',
                        'asia-drama-2',
                        'asia-love-comedy',
                        'asia-loveromance',
                        'asia-historical',
                        'k-world',
                        'drama',
                        'drama-2',
                        'mahjong',
                        'shogi',
                        'world-sports',
                        'world-sports-1',
                        'world-sports-2',
                        'sumo',
                        'fighting-sports',
                        'boxing',
                        'hiphop',
                        'commercial',
                        'keirin-auto',
                        'boatrace'];

for(const name of channelNameArry){
  app.get('/channels/' + name, async (req, res) => {
    const rest = await getData();
    const obj = rest.channelSchedules.filter(x => x.channelId === name);
    var date = new Date();
    var unixTimestamp = Math.floor(date.getTime() / 1000 );
    const slotsObj = JSON.stringify(obj).slice(1).slice(0,-1);
    const filSlots = JSON.parse(slotsObj).slots.filter(x => x.startAt <= unixTimestamp && x.endAt >= unixTimestamp);
    const idObj = JSON.stringify(filSlots).slice(1).slice(0, -1);
    const comment = await getComment(JSON.parse(idObj).id);
    res.send(comment);
  });
}

module.exports = app;
