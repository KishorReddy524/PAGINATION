const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://kishor:524@cluster0.i0acw.mongodb.net/test")
}

module.exports=connect;