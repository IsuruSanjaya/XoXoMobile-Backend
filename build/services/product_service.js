"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../models/product_model"));
const createproduct = (req, res, next) => {
    const { name, quantity, manufacturer, type, supplier, price } = req.body;
    const product = new product_model_1.default({
        name,
        quantity,
        type,
        price,
        supplier,
        manufacturer,
        
    });
    return product.save().then((product) => res.status(201).json(product)).catch(error => res.status(500).json({ error }));
};
const updateproduct = (req, res, next) => {
    const id = req.params.id;
    return product_model_1.default.findById(id).then((product) => {
        if (product) {
            return product.set(req.body)
                .save().then((product) => res.status(201)
                .json({ product }))
                .catch(error => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ "message": "product not found" });
        }
    }).catch(error => res.status(500).json({ error }));
};
const getproducts = (req, res, next) => {
    const companyID = req.params.id;
    const offset = parseInt(req.params.offset);
    const page = parseInt(req.params.page);
    const query = { companyId: companyID };
    return product_model_1.default
        .find(query).skip(page * page)
        .limit(offset)
        .then((products) => res.status(200).json({ products }))
        .catch(error => res.status(500).json({ error }));
};
const deleteproduct = (req, res, next) => {
    const id = req.params.id;
    return product_model_1.default.findByIdAndDelete(id)
        .then(() => res.status(201).json({ success: true }))
        .catch((error) => res.status(500).json({ error }));
};
const getproductById = (req, res, next) => {
    const id = req.params.id;
    return product_model_1.default
        .findById(id)
        .then((product) => {
        if (product) {
            return res.status(200).json({
                product
            });
        }
        else {
            return res.status(404).json({ "message": "product not found" });
        }
    })
        .catch(error => res.status(500).json({ error }));
};
exports.default = { createproduct, updateproduct, getproducts, getproductById, deleteproduct };
