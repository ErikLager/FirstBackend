const express = require("express");
const prodRouter = express.Router();
const Prod = require("../models/Product");

prodRouter.get("/getproducts", (req, res) => {
    Prod.find({}, (e, documents) => {
        if (e) {
            res.status(500).json({
                msg: {
                    msgBody: "An error occured while reading the products",
                    msgError: true
                },
            });
        } else {
            res.status(200).json({ prods: documents });
        }
    });
});


prodRouter.post("/newprod", (req, res) => {
    console.log(req.body)
    const newProd = new Prod({
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
    });
    newProd.save((e) => {
        if (e) {
            res.status(500).json({
                msg: {
                    msgBody: "An error occurd when creating new product",
                    msgError: true
                },
            });
        } else {
            res.status(201).json({
                msg: {
                    msgBody: "Product was uploaded",
                    msgError: false,
                },
            });
        };
    });
});

prodRouter.put("/updateproduct/:id", (req, res) => {
    Prod.findByIdAndUpdate(req.params.id, { name: req.body.name, desc: req.body.desc, price: req.body.price }, (e) => {
        if (e) {
            console.log(e);
            res.status(500).json({
                msg: {
                    msgBody: "An error occured while updating product",
                    msgError: true,
                },
            })
        } else {
            res.status(200).json({
                msg: {
                    msgBody: "Product was successfully updated",
                    msgError: false,
                },
            });
        };
    });
});

prodRouter.delete("/deleteproduct/:id", (req, res) => {
    Prod.findByIdAndDelete(req.params.id, (e) => {
        if (e) {
            res.status(500).json({
                msg: {
                    msgBody: "An error occurd while deleting product",
                    msgError: true
                },
            });
        } else {
            res.status(200).json({
                msg: {
                    msgBody: "Product was successfully deleted",
                    msgError: false
                }
            })
        }
    })
})

module.exports = prodRouter;
