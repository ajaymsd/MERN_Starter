require('dotenv').config();
const express=require('express');
const app=express();
const workoutRoutes=require("./routes");
const mongoose=require("mongoose");
const Workout=require("./models");
const BodyParser = require( 'body-parser' );


//MIDDLEWARE
app.use( BodyParser.urlencoded( { extended: false } ) );
app.use( BodyParser.json() );
app.use(express.json());
app.use((err,req,res,next)=>{
   console.log(req.path,req.method);
   next();
})
/*
app.get('api/workouts',(req,res)=>{
    res.json({msg:'get worked'});
})
app.get('api/workouts/:id',(req,res)=>{
    res.json({msg:'specific get worked'});
})
app.post('api/workouts',(req,res)=>{
    res.json({msg:'Post worked'});
})
app.delete('api/workouts/:id',(req,res)=>{
    res.json({msg:'delete worked'});
})
app.patch('api/workouts/:id',(req,res)=>{
    res.json({msg:'patch worked'});
})
*/
//here we are using the routes which we are created inside routes file(workouts.js)
app.use('api/workouts',workoutRoutes);


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database Connected");
    app.listen(process.env.PORT,()=>{
        console.log("Server Started");
    })
}).catch((err)=>{
    console.log(err);
})

