import { User } from "../models/userModel.js"
import { Record } from "../models/recordModel.js"
import { Credit } from "../models/creditModel.js"
import { Customer } from "../models/customerModel.js"

import jwt from 'jsonwebtoken'

const jwtSign = (id) =>{
    return jwt.sign({id:id}, 'secret-key')
}

export const home = async (req,res) =>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.log(err)
    }
}

export const register = async (req,res) => {
    try {
        let user = new User(req.body)
        let newUser = await user.save()
        const jwt = jwtSign(newUser.id)
        res.json({jwt,newUser})
    } catch (err) {
        console.log(err)
    }
}

export const add_customer = async (req,res) => {
    try{
        const userId = req.params.id
        const customer = await Customer.create({
            customerName: req.body.customerName,
            address: req.body.address,
            email: req.body.email,
            number: req.body.number,
            user: userId
        })
        const user = await User.findById(userId)
        user.customers.push(customer)
        await user.save()
        res.json({customer,user})
    }catch (err){
        console.log(err)
    }
}

export const get_customers = async (req,res) => {
    try {
        const customers = await User.findById(req.params.id).populate('customers')
        res.json(customers)
    } catch (err) {
        console.log(err)
    }
}

export const add_record = async (req,res) => {
    const userId = req.params.id
    try {
        const record = await Record.create({
            productName : req.body.productName,
            price: req.body.price,
            quantity: req.body.quantity,
            amountPaid: req.body.amountPaid,
            credit: req.body.credit,
            user: req.body.userId,
        })
        const user = await User.findById(userId)
        user.records.push(record)
        user.save()
        res.json({record,user})
    } catch (err) {
        console.log(err)
    }
}

export const login = async (req,res) =>{
    try{
        const shopName = await User.findOne({shopName: req.body.shopName})
        const password = await User.findOne({password: req.body.password})
        
        if(shopName && password) {
            const jwt = jwtSign(shopName.id)
            res.json({jwt,shopName})
        }
    }
    catch (err) {
        console.log(err)
    }
}