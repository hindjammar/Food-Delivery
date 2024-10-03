import mongoose from "mongoose";



export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hindjammar5:20021008%2F%2F@cluster0.b0fvx.mongodb.net/food-del').then(()=>console.log("DB Connected "));
}