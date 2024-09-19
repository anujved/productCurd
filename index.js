const express = require('express');
const mongoose = require('mongoose');

const productsRoutes = require('./routes')
const app = express();
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/productsCurd")
.then(() =>{
    app.listen(3000, () =>{console.log("app running on 3000")})
})



app.use("/api/products", productsRoutes)