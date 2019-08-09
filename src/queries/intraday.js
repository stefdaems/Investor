const alpha = require('alphavantage')({ key: process.env.ALP_KEY });

async function intraday(symbol) {
    return await alpha.data.intraday(symbol);
}

module.exports = intraday;