const express = require(`express`)
const mongoose = require(`mongoose`)
const pesertaRoute = require('./routes/peserta');
const app = express()
const port = 3000
require("dotenv/config")

const db = mongoose.connection;

mongoose.connect(process.env.DB_CONNECTION)
db.on(`error`, (err) => {
    console.error(`mongodb connection error: ${err}`)
})
db.once(`open`, ()=>{
    console.log(`mongodb connection succesfull`)
})

// Middleware
app.use(express.json());
app.use('/peserta', pesertaRoute);

// Route
app.get(`/`, (req, res) => {
    res.send(`gw ada di home`)
})
// app.post();
// app.delete();

app.listen(port)