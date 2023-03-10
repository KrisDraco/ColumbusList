const Product = require('../models/Product');

const getAllProducts = async(req, res) => {
    try{

        const products = await Product.find({})
        res.json(products)
        
;    } catch(error){
    console.error(error);

    res.status(500).json({message: "Server Error"});
}

}


const getProductByID = async(req, res) => {
    try{
        const product = await Product.findByID(req.params.id)

        res.json(product)
;    } catch(error){
    console.error(error);

    res.status(500).json({message: "Server Error"});
}

}

module.exports ={
    getAllProducts,
    getProductByID,
}