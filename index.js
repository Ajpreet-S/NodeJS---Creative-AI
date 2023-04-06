'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Initial commit');
})

app.listen(process.env.PORT || 3000);