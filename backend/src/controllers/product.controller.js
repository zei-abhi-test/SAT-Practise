const Product = require("../models/product.model")

exports.createProduct = async(req,res)=>{
const product = await Product.create(req.body)
res.status(200).json(product)
}

exports.getProducts = async(req,res)=>{
const products = await Product.find()
res.status(200).json(products)
}

exports.getProductById = async(req,res)=>{
const product = await Product.findById(req.params.id)
res.status(200).json(product)
}

exports.updateProduct = async(req,res)=>{
const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
res.status(200).json(product)
}

exports.deleteProduct = async(req,res)=>{
await Product.findByIdAndDelete(req.params.id)
res.status(200).json({message:"Product deleted"})
}