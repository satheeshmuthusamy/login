const express = require('express');
const app = express();
const db = require('./db');
const port = 3000;
const cors = require('cors');
app.use(cors());
const AuthController = require('./controller/authController');
app.use('/api/auth', AuthController) //the route is api/auth/reg (or) api/auth/req_route==>this is a main route

app.listen(port, () => {
    console.log(`The port is listening to the server ${port}`)
})