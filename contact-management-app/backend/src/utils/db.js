const mongoose=require("mongoose");
//const URI="mongodb//127.0.0.1:27017/mern_admin";
const URI=process.env.MONGODB_URI;
const connectDb=async()=>{
    try {
        console.log(URI);
        await mongoose.connect(URI);
        console.log("Connection succesful to db");
        
    } catch (error) {
        console.error("database connection failed");
        console.log(error);
        process.exit(0);
    }
}
module.exports=connectDb;