import express from "express";
import routes from  './routes/routes.js'
import mongoose from "mongoose";

const app = express()

mongoose.connect('mongodb://localhost/record-keeping')
.then(res => console.log('connect'))
.catch(err => console.log(err))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api', routes)


app.listen(4000)
