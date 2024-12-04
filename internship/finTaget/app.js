const express = require ("express");
const winston = require('winston');
const app = express();
require('dotenv').config();

const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: 'task_logs.log' }),
    ],
  });

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
  });

app.listen(process.env.PORT,()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})


module.exports = app;