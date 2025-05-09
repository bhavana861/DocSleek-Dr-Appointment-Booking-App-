import mongoose from "mongoose";


const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>console.log("MONGODB ATLAS CONNECTED SUCCESSFULLY"))
await mongoose.connect(`${process.env.CONNECTIONSTRING}/DocSleekApp`)
}

export default connectDB