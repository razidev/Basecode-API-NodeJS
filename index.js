const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const APIS = require('./APIs/route');

app.use("/", APIS);
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.listen(PORT, ()=> console.info(`Server has started on PORT: ${PORT}`))

module.exports = app;