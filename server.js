const app = require('express')();

app.get('/', (req, res) => {
    res.send('hello mga sirs');
});

const listener = app.listen(() => {
    console.log(listener.address().port);
});
