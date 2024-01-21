const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/mensaje', (req, res) => {
    res.send('Hola Mundo');
})

app.get('/hora', (req, res) => {
    let now = new Date();
    res.send(now)
})

app.listen(PORT, () => {
    console.log(`El servidor inicio en el puerto ${PORT}`)
});