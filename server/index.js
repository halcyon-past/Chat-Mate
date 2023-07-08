const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data.js');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/api/chats', (req, res) => {
    res.send(chats);
    }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
    }
);