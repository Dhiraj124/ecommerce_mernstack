import Product from '../models/productModel.js'
import asyncHandler from 'express-Async-Handler'

// @desc fetch all products 
// @route GET /api/products
// @acess Public
const getProducts=asyncHandler(async(req,res)=>{
    const products= await Product.find({})
    res.json(products)
})




// @desc fetch single products 
// @route GET /api/products/:id
// @acess Public
const getProductById=asyncHandler(async(req,res)=>{
    const product= await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
    else{
        throw new Error('Product not found')
    }
})

export {
    getProducts,getProductById
}