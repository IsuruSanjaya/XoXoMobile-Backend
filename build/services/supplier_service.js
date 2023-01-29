"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supplier_model_1 = __importDefault(require("../models/supplier_model"));
const createsupplier = (req, res, next) => {
    const {     name,
        quantity,
        type,
        price,
        supplierName,
        manufacturer,
        date, 
        status, } = req.body;
    const supplier = new supplier_model_1.default({
        name,
        quantity,
        type,
        price,
        supplierName,
        manufacturer,
        date, 
        status,
        
    });
    return supplier.save().then((supplier) => res.status(201).json(supplier)).catch(error => res.status(500).json({ error }));
};
const updatesupplier = (req, res, next) => {
    const id = req.params.id;
    return supplier_model_1.default.findById(id).then((supplier) => {
        if (supplier) {
            return supplier.set(req.body)
                .save().then((supplier) => res.status(201)
                .json({ supplier }))
                .catch(error => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ "message": "supplier not found" });
        }
    }).catch(error => res.status(500).json({ error }));
};
const getsuppliers = (req, res, next) => {
    const companyID = req.params.id;
    const offset = parseInt(req.params.offset);
    const page = parseInt(req.params.page);
    const query = { companyId: companyID };
    return supplier_model_1.default
        .find(query).skip(page * page)
        .limit(offset)
        .then((suppliers) => res.status(200).json({ suppliers }))
        .catch(error => res.status(500).json({ error }));
};
const deletesupplier = (req, res, next) => {
    const id = req.params.id;
    return supplier_model_1.default.findByIdAndDelete(id)
        .then(() => res.status(201).json({ success: true }))
        .catch((error) => res.status(500).json({ error }));
};
const getsupplierById = (req, res, next) => {
    const id = req.params.id;
    return supplier_model_1.default
        .findById(id)
        .then((supplier) => {
        if (supplier) {
            return res.status(200).json({
                supplier
            });
        }
        else {
            return res.status(404).json({ "message": "supplier not found" });
        }
    })
        .catch(error => res.status(500).json({ error }));
};
exports.default = { createsupplier, updatesupplier, getsuppliers, getsupplierById, deletesupplier };
