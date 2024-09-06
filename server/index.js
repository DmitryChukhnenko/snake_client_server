/* MY CONFIGURATIONS */

const appcfg = require('./appcfg');

/* POSTGRESQL */

const Pool = require('pg').Pool;
const pool = new Pool(appcfg.pg_cfg);

/* WEB APPLICATION */

const express = require('express');
const app = express();
app.use(express.json());
app.use('/', express.static(appcfg.Project_Root));
app.use('/assets', express.static(appcfg.Project_Root + '/client/dist/assets'));
app.use('/img', express.static(appcfg.Project_Root + '/client/dist'));
const port = 3001;
app.get('/', (req, res) => {
  res.status(200).sendFile(
    'client/dist/index.html',
    { root: appcfg.Project_Root });
});

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}.`)
});