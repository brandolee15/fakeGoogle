const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(express.static('client'));
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello World, this is our search bar!')
// });

//search api script.js

app.listen(port, () => {
    console.log(`Our Google search bar is listening at http://localhost:${port}`)
});

module.exports = app;
