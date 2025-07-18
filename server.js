const express = require('express');
const connectToDb = require('./config/db');
const cors = require('cors');
const taskRoutes =  require('./routes/taskRoutes');
require('dotenv').config();

const app = express();

connectToDb();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({success:false,message:"Internal Server Error"});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});



