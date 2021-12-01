const express = require('express');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./route/user');
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('api/users', userRoutes);

module.exports = app;