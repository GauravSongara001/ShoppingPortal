const mongoose = require('mongoose');

const conn = mongoose.connect("mongodb://0.0.0.0:27017/ShoppingPortal")
.then(() => console.log("Database Connected Successfully"))
.catch((err) => console.log("Error connecting db: ", err))

module.exports = conn