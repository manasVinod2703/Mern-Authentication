import mongoose from "mongoose";

const connectDB = async(url)=>{
    const response = await mongoose.connect(url);

    return response;
}

export default connectDB;