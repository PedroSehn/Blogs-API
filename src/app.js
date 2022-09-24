const express = require('express');
const UserRouter = require('./routers/user.router');
const LoginRouter = require('./routers/login.router');
// ...

const app = express();

app.use(express.json());

// ...
app.use('/user', UserRouter);
app.use('/login', LoginRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
