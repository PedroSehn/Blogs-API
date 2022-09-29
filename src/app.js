const express = require('express');
const UserRouter = require('./routers/user.router');
const LoginRouter = require('./routers/login.router');
const CategoryRouter = require('./routers/categorie.router');
const PostRouter = require('./routers/post.router');

const app = express();

app.use(express.json());

app.use('/user', UserRouter);
app.use('/login', LoginRouter);
app.use('/categories', CategoryRouter);
app.use('/post', PostRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
