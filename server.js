const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://ssimmons05:skilledkc55@cluster0-shard-00-00.ualle.mongodb.net:27017,cluster0-shard-00-01.ualle.mongodb.net:27017,cluster0-shard-00-02.ualle.mongodb.net:27017/SFDV?ssl=true&replicaSet=atlas-bigie8-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const phrasesRouter = require('./routes/phrases')
app.use('/phrases', phrasesRouter)

app.listen(3112, () => console.log('server started'))