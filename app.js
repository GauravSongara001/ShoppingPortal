const express = require('express');
const app = express();
require('dotenv').config()
const router = require('./routes/routes');
require('./db/conn')

const PORT = process.env.SERVER_PORT || 6000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log("Server Listening to PORT: ", PORT);
})