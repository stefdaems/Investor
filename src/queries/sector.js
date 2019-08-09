const alpha = require('alphavantage')({ key: process.env.ALP_KEY });

async function sector() {
    return await alpha.performance.sector();
}

module.exports = sector;