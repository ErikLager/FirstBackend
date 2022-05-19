const mongoose = require("mongoose");

const ProdSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("Prod", ProdSchema);