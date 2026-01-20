import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const UserSchmea=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

},{timestamps:true})

UserSchmea.methods.comparePassword=function (password){
return bcrypt.compareSync(password,this.password)

}

export default mongoose.model("User",UserSchmea)