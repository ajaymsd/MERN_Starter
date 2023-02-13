const express=require('express');
const router=express.Router();
const {createWorkout,workOuts,getSingleworkout,deleteWorkout,updateWorkout} =require('./controllers');
const mongoose=require("mongoose");

//get all workouts
//here api/workouts will act as a route path which we mentioned in the app.js file
router.get('/',workOuts);

//get single workout
router.get('/:id',getSingleworkout);

router.post('/',createWorkout);

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports=router;

