const express = require('express');
const app = express();
const {getProducts, getSingleProduct} = require('./getProducts');


app.get('/api/products', getProducts);

app.get('/api/products/:id', getSingleProduct)

app.get('/api/products/')

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})