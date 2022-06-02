import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    quantity:{
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
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{timestamps:true})

export const Record = mongoose.model('record', recordSchema)