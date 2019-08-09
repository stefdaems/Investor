require('dotenv').config()

const alpha = require('alphavantage')({ key: process.env.ALP_KEY });
 
// Simple examples
alpha.data.intraday(`anh`).then(data => {
  console.log(JSON.stringify(data));
});
/* 
alpha.data.batch([`msft`, `aapl`]).then(data => {
  console.log(JSON.stringify(data));
});
 
alpha.forex.rate('btc', 'usd').then(data => {
  console.log(JSON.stringify(data));
})
 
alpha.crypto.daily('btc', 'usd').then(data => {
  console.log(JSON.stringify(data));
})
 
alpha.technical.sma(`msft`, `daily`, 60, `close`).then(data => {
  console.log(JSON.stringify(data));
})
 */
alpha.performance.sector().then(data => {
  console.log(JSON.stringify(data));
});