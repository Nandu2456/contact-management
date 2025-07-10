/*require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const corsOptions={
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOptions));

app.use(express.json());

// your routes
const contactRoutes = require('./src/routes/Contactroute');
//app.use('/api/contacts', contactRoutes);

// connect to MongoDB
mongoose.connect('mongodb+srv://nandinigourishetti:Nandu123@cluster0.wsa4vqh.mongodb.net/mern_data')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

/*app.listen(5000, () => {
  console.log('Server running on port 5000');
});*/

require('dotenv').config();
const express=require("express");
const app=express();

const connectDb=require("./src/utils/db");

const cors=require("cors");
const contactRoutes = require('./src/routes/Contactroute');


const corsOptions={
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/contacts', contactRoutes);

const PORT=5000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`the server is runnign at ${PORT}`);
    });
});


