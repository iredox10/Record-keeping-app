import mongoose from "mongoose";

const creditSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    amountPaid:{
        type: Number,
        required: true,
    },
    credit:{
        type: Number,
        default: 0
    },
},{timestamps:true})

export const Credit = mongoose.model('credit', creditSchema)