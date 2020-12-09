const middleware = require('./middleware');
const session = require('koa-session');
const Koa = require('koa');
const app = new Koa();

const api = require('./routes/api');
/*
Middleware: helmet, compose, convert, logger, session, bodyparser, cors
*/
app.use(middleware.Middleware());

app.keys = ['WBA97ua7yDZLYrOxr4MF'];
app.use(session({}, app));

const passport = require('koa-passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(api.routes());

app.listen(3001);