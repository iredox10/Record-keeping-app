import mongoose from "mongoose";

const creditSchema = new mongoose.Schema({
    customerName:{
        type: String,
        required: true,
    },
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
    },
    date:{
        type: Date,
    },
})

export const Credit = mongoose.model('credit', creditSchema)