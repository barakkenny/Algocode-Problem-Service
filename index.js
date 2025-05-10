const express = require('express');
const { PORT } = require('./config/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('./src/appRoutes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req, res)=> {
    return res.json({message: 'ping controller is up'})
})

app.listen(PORT, ()=> {
    console.log(`listening at PORT ${PORT}`)
})