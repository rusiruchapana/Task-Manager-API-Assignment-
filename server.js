const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({success:false,message:"Internal Server Error"});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});



