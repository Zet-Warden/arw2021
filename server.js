const app = require('express')();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('dingledong');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server is listening on port: ' + port);
});
