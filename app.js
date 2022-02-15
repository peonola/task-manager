const express = require('express');
const app = express();
const tasks = require('./routes/routes');
const connectDB = require('./connect');
require('dotenv').config();


app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',tasks);


const port = 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Connected to port ${port}...`));
    } catch (error) {
        console.log(error)
    }
} 

start();