const express = require('express')
const cors = require("cors");
require('dotenv').config()

const connectDb = require('./utils/db')
const taskRoute = require('./routes/task-route')

const PORT = process.env.PORT || 5001
const app = express();
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
  
app.use(cors(corsOptions));

app.use(express.json())
app.use('/api/tasks',taskRoute)

app.get('/',(req,res)=>{
    res.send('welcome')
})




connectDb()

app.listen(PORT,()=>{
    console.log('server is running')
})