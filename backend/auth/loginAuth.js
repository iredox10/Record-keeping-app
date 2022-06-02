import jwt from 'jsonwebtoken'
import {User} from '../models/userModel.js'

export const verifyLogin = async (req,res,next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    }
    if(!token){
        res.json('please sign in or register first')
    }

    try{
        const user = jwt.verify(token, 'secret-key', (err, user)=>{
            if(err){
                res.json('there is not user')
            }
            next()
        })
    }catch (err){
        console.log(err)
    }
}