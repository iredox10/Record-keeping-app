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
        res.json({newUser,jwt})
    } catch (err) {
        console.log(err)
    }
}

export const get_user = async (req,res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(err){
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

export const add_credit = async (req,res) => {
    try {
        const credit = await Credit.create({
            productName: req.body.productName,
            price: req.body.price,
            amountPaid:req.body.amountPaid,
            credits: req.body.credits,
        })
        const customer = await Customer.findById(req.params.id)
        customer.products.push(credit)
        await customer.save()
        res.json({credit,customer})
    } catch (err) {
        console.log(err)
    }
}

export const get_credit = async (req,res) => {
    try {
        const credits = await Customer.findById(req.params.id).populate('products')
        res.json(credits)
    } catch (err) {
        
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
        res.json(err)
        // console.log(err)
    }
}

export const get_record = async (req,res) => {
    try{
        const records = await User.findById(req.params.id).populate('records')
        res.json(records.records)
    }catch(err) {
        res.json(err)
    }
}

export const login = async (req,res) =>{
    try{
        const shopName = await User.findOne({shopName: req.body.shopName})
        const password = await User.findOne({password: req.body.password})

        if(shopName && password) {
            const jwt = jwtSign(shopName.id)
            res.json({shopName,jwt})
        }else{
            res.json('wrong credentials')
        }
    }catch (err) {
        res.json(err)
    }
}