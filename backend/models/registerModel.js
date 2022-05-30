import mongoose from "mongoose";
// import bcrypt from 'bcrypt'
const bcrypt = 'bcrypt'


const registerSchema = mongoose.Schema({
  shopName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  shopNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// registerSchema.pre('save', function(){
//     if(this.password) {
//       this.password = bcrypt.hash(this.password)
//     }  
// })

export const Register = mongoose.model('register',registerSchema)

