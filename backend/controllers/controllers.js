import { Register } from "../models/registerModel.js"
import jwt from 'jsonwebtoken'

const jwtSign = (id) =>{
    return jwt.sign({id:id}, 'secret-key', {expiresIn: '10m'})
}

export const home = async (req,res) =>{
    try {
        const users = await Register.find()
        res.json(users)
    } catch (err) {
        console.log(err)
    }
}

export const register = async (req,res) => {
    try {
        let user = new Register(req.body)
        let newUser = await user.save()
        const jwt = jwtSign(newUser.id)
        res.json({jwt})
    } catch (err) {
        console.log(err)
    }
}

export const sing_in = async (req,res) =>{
    try{
        const shopName = await Register.findOne({shopName: req.body.shopName})
        const password = await Register.findOne({password: req.body.password})
        
        shopName && password ? res.json(shopName) : res.json('err')
    }
    catch (err) {
        console.log(err)
    }
}