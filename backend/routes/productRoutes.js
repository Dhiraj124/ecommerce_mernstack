import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-Async-Handler'
const router= express.Router()



// @desc fetch all products 
// @route GET /api/products
// @acess Public
router.get('/',asyncHandler(async(req,res)=>{

    const products= await Product.find({})
    res.json(products)

}))



// @desc fetch single products 
// @route GET /api/products/:id
// @acess Public
router.get('/:id',asyncHandler(async(req,res)=>{
    const product= await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
    else{
        throw new Error('Product not found')
    }
   
}))

export default router