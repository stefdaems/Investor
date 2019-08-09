const express = require('express');
const app = express();
const port = 3000;
const { intraday, sector } = require('./src/queries');

app.get('/intraday/:client', async (req, res) => {
    res.send(await intraday(req.params.client));
}
);

app.get('/sector/', async (req, res) => {
    res.send(await sector());
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));