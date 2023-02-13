const Workout=require('./models');
const mongoose=require('mongoose');

//get all workouts
const workOuts= async (req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}
//get a single workout
const getSingleworkout=async(req,res)=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({'error':"No such Workout"});
    }
    const workout=await Workout.findById(id);
    if(!workout){
        return res.status(404).json({'error':"No such Workout"});
    }
    res.status(200).json(workout)
}
//create new workout
const createWorkout=async (req,res)=>{
    const {title,load,reps}=req.body;
    //add doc to db
    try{
      const workout=await Workout.Create({title,load,reps});
      res.status(200).json({msg:workout})
    }catch(error){
      console.log(err);
    }
};
//delete a workout
const deleteWorkout=async ()=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({'error':"No such Workout"});
    }
    const workout=await Workout.findOneAndDelete({_id:id});
    if(!workout){
        return res.status(404).json({'error':"No such Workout"});
    }
    res.status(200).json(workout)
}

//update a workout
const updateWorkout=async()=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({'error':"No such Workout"});
    }
    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    });
    if(!workout){
        return res.status(404).json({'error':"No such Workout"});
    }
    res.status(200).json(workout)

}
module.exports={
    createWorkout,
    getSingleworkout,
    workOuts,
    deleteWorkout,
    updateWorkout
}