const mongoose=require('mongoose');

// connect to db

const connectDb=async()=>{
    try{
      const conn=await mongoose.connect(process.env.MONGO_URI);
      console.log(`Mongodb Connected ${conn.connection.host}`)
    }catch(error){
  console.log(`Error :${error.message}`)
    process.exit(1);
}
}

module.exports=connectDb;













