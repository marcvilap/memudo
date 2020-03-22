const productCtrl = {};
const Product = require('../models/Product');

productCtrl.getProducts = async (req,res) =>{
    const products = await Product.find({name:new RegExp(req.query.name, 'i')});
    res.send(products)

} 

productCtrl.createProduct = async (req,res) => {
    const {name,length,height,width,weight} = req.body;
    const newProduct = new Product({
        name,
        length,
        height,
        width,
        weight
    
    });
    await newProduct.save();
     res.send(newProduct)
}

productCtrl.deleteProduct = async (req,res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json('Product deleted')

}

productCtrl.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product)


}

productCtrl.updateProduct = async (req, res) => {
    const { name,length,height,width,weight } = req.body;
    await Product.findOneAndUpdate(req.params.id, {
        name,
        length,
        height,
        width,
        weight
    });
    res.json({ message: 'Product updated' })

}

module.exports = productCtrl;