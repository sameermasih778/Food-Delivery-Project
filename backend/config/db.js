import mongoose from "mongoose";

export const connectDB = async () =>{
     await mongoose.connect('mongodb+srv://sameer123:420420@cluster0.qnhlnxj.mongodb.net/food-del').then(()=>console.log("DB Conected")); 
}