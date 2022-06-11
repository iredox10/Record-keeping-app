import express from "express";
import * as controller from '../controllers/controllers.js'
import * as auth from '../auth/loginAuth.js'
const route = express.Router()


route.get('/', controller.home)

route.post('/register', controller.register)

route.get('/get-user/:id',controller.get_user)

route.post('/log-in',controller.login)

route.post('/add-customer/:id', auth.verifyLogin, controller.add_customer)

route.post('/add-record/:id',controller.add_record)

route.get('/get-records/:id', controller.get_record)

route.get('/get-customers/:id', controller.get_customers)

route.post('/add-credit/:id', controller.add_credit)

route.get('/get-credits/:id', controller.get_credit)


export default route