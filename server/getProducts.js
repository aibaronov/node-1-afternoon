const products = require('../products.json');

const getProducts = (req, res) => {
    const price = req.query.price;
    console.log(price);
    if(price){
        const responseArray = products.filter((product) => {
            return Number(product.price >= Number(price));
        })
        res.status(200).send(responseArray);
    }
    else{
        res.status(200).send(products);
    }
};

const getSingleProduct = (req, res) =>{
    const id = req.params.id;
    let foundBool = false;
    const resProduct = products.filter((product) =>{
        if(Number(product.id) === Number(id)){
            foundBool = true;
            return Number(product.id) === Number(id);
        }
    })
    if(foundBool === true){
        res.status(200).send(resProduct);
    }
    else{
        res.status(500).send('Product Not Found');
    }
};

module.exports = {getProducts, getSingleProduct};