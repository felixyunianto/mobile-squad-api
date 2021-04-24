require('dotenv').config({});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mainRoute = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", mainRoute);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})