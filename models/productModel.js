const mongoose = require('mongoose')




const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        id: {
            type: Number,
            required: [true, "Please enter your ID"]
        },
        email: {
            type: String,
            required: [true, "Please enter a email address"]
        },
        password: {
            type: String,
            required: [true, "Please enter a password"]
        },
        displayphoto: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;