const express = require('express');
const path=require('path');
const app = express();
const port= process.env.PORT || 3000;

express.mime.type['bin'] = 'application/octet-stream';

app.use('/', express.static(__dirname));


app.listen(port);