const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje')

const app = express();
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }))

// Routes


// starting the server

app.listen(app.get('port'), () => {
    console.log('servidor corriendo')
});

//method
app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
});
