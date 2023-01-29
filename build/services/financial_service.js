"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const financial_model_1 = __importDefault(require("../models/financial_model"));
const createfinancial = (req, res, next) => {
    const { Byear,
        Bmonth,
        Bday,
        Bpayee,
        Bprice,
        Bdescription,
        Bbranch,
        Btype, } = req.body;
    const financial = new financial_model_1.default({
        Byear,
        Bmonth,
        Bday,
        Bpayee,
        Bprice,
        Bdescription,
        Bbranch,
        Btype,
    });
    return financial.save().then((financial) => res.status(201).json(financial)).catch(error => res.status(500).json({ error }));
};
const updatefinancial = (req, res, next) => {
    const id = req.params.id;
    return financial_model_1.default.findById(id).then((financial) => {
        if (financial) {
            return financial.set(req.body)
                .save().then((financial) => res.status(201)
                    .json({ financial }))
                .catch(error => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ "message": "financial not found" });
        }
    }).catch(error => res.status(500).json({ error }));
};
const getfinancials = (req, res, next) => {
    const companyID = req.params.id;
    const offset = parseInt(req.params.offset);
    const page = parseInt(req.params.page);
    return financial_model_1.default.find({}).skip(page * page)
        .limit(offset)
        .then((financials) => res.status(200).json({ financials }))
        .catch(error => res.status(500).json({ error }));
};
const deletefinancial = (req, res, next) => {
    const id = req.params.id;
    return financial_model_1.default.findByIdAndDelete(id)
        .then(() => res.status(201).json({ success: true }))
        .catch((error) => res.status(500).json({ error }));
};
const getfinancialById = (req, res, next) => {
    const id = req.params.id;
    return financial_model_1.default
        .findById(id)
        .then((financial) => {
            if (financial) {
                return res.status(200).json({
                    financial
                });
            }
            else {
                return res.status(404).json({ "message": "financial not found" });
            }
        })
        .catch(error => res.status(500).json({ error }));
};
exports.default = { createfinancial, updatefinancial, getfinancials, getfinancialById, deletefinancial };
