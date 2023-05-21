const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

app.listen(3001, ()=> {
    console.log(`App is running on http://localhost:3001`);
});