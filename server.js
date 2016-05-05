var koa = require('koa');
var logger = require('koa-logger');
var app = koa();
var serve = require('koa-static');

app.use(logger());
app.use(serve('./dist'));

app.listen(3000);

console.log('Koa listening on port 3000 and serving ./dist');
