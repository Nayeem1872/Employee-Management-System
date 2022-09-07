const express=  require('express');
const dotenv = require('dotenv');
const app= express();
const morgan =require ('morgan');
const bodyparser =require('body-parser')
dotenv.config({path:'config.env'})
const path = require('path');
const mongoose = require('mongoose')
const connect = require('./database/connection');

const PORT = process.env.PORT||8080

app.use(morgan('tiny'));

connect();

app.use(bodyparser.urlencoded({extended:true}))

// app.use(bodyparser.urlencoded({extended:true}))

// app.use(express.static('../assets'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,"assets")))
// app.set('views',path.join(__dirname,"views"))
// app.search("view",path.resole(__dirname,"view/ejs"))

// app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
// app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
// app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
// app.use(path.join(__dirname,"routes/router"))
app.use('/',require('./routes/router'))
// module.exports = router;

app.listen(PORT,()=>{
    console.log('server running');
})