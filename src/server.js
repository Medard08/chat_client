const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path')



const app = express();
const server = http.createServer(app);




app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));


server.listen(4200, () => console.log('listening at 4200'));
