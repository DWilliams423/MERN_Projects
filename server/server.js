const express = require('express');
const cors = require('cors');
const app = express();
const cookies = require('cookie-parser');
require('./config/mongoose.config');
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookies())
app.use(express.urlencoded({extended: true}));
require('./routes/recs.routes')(app);
require('dotenv').config();

const port = 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));