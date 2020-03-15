const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const postsRoute = require('./apps/router/posts');
app.use('/posts', postsRoute);

mongoose.connect(process.env.DB_CONNECTION,  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err) {
        console.log(err);
    }else{
        console.log("Connected!");
    }
});

app.listen(3000);




