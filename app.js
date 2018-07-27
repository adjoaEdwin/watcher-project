const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path');
require('dotenv').config();


const app = express();

app.use(routes);
app.use(bodyParser.json());
app.use('/css', express.static(path.join(__dirname, '/node_modules/bulma/css')))
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/img', express.static(path.join(__dirname, '/public/img')));
app.set("views", "./src/views");
app.set("view engine", "ejs");



app.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'Watcher'
    }
  );
})



module.exports = app;