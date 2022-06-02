import mongoose from "mongoose";
// import bcrypt from 'bcrypt'
const bcrypt = 'bcrypt'


const userSchema = mongoose.Schema({
  shopName: {
    type: String,
    required: true,
    unique: true
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
    select: false
  },
  records:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'record'
  }],
  customers:[ {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'customer'
  }]
});

export const User = mongoose.model('user',userSchema)

