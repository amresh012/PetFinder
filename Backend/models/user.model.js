/* eslint-disable no-undef */
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, required:true , default:"Individual"}
});

userSchema.methods.isCorrectPassword=function(password){
   return bcrypt.compareSync(password,this.password);
};

//hashing the password before saving it to database
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err);
        
        bcrypt.hash( user.password, salt ,(err, hashedPass )=>{
            if(err) return next(err);
            
            user.password = hashedPass ;
            next()
        })
    });
})

const User = mongoose.model("User",userSchema);
module.exports = User;