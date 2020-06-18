const express = require('express');
const app = express();
const parser = require('body-parser');
const http = require('http').createServer(app);
const port = 3000;
const cors = require('cors')
app.use(cors());


const userRouter = require('./routes/userManager');
const roomRouter = require('./routes/fileManager');

app.use(parser.json());
app.use('/user', userRouter);
app.use('/file', roomRouter);

http.listen(port, () => {
    console.log('server started ... ');
})