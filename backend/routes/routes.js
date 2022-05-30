import express from "express";
import * as controller from '../controllers/controllers.js'
const route = express.Router()


route.get('/', controller.home)

route.post('/register', controller.register)

route.post('/sign-in', controller.sing_in)

export default route