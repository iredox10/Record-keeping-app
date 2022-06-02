import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    customerName:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    number:{
        type: Number,
        required: true,
    },
    products:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'credit'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

export const Customer = mongoose.model('customer', customerSchema)