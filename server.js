const app = require('express')();
require('dotenv').config();

app.get('/', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server is listening on port: ' + port);
});
