//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false

import express from "express";
import mongoose  from "mongoose";
import Cards from './dbCards.js';



// App config
const app= express();
const port = process.env.PORT ||8001;
const connection_url=`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`;


//middleware

//db config
// mongoose.connect(connection_url,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
// })

mongoose.connect(connection_url,()=>{
    console.log("connected")
})


//api endpoints
app.get("/",(req,res)=> res.status(200).send("HELLO VARINDA"));

app.post('/tinder/card',(req,res)=>{
    const dbCard=req.body;

    Cards.create(dbCard,(err,data)=>{
        if(err)
        {
            res.status(500).send(err)
        }
        else
        {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req,res)=>{

    const dbCard=req.body;

    Cards.find((err,data)=>{
        if(err)
        {
            res.status(500).send(err)
        }
        else
        {
            res.status(200).send(data)
        }
    })

})

//listener
app.listen(port, () => console.log(`listening to the localhost : ${port}` ));