"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const offerAndPromo_model_1 = __importDefault(require("../models/offerAndPromo_model"));
const createofferAndPromo = (req, res, next) => {
    const {  promoname,
        promodescription,
        discount,
        issueYear,
        issueMonth,
        issueDate,
        dueYear,
        dueMonth,
        dueDate, } = req.body;
    const offerAndPromo = new offerAndPromo_model_1.default({
        promoname,
        promodescription,
        discount,
        issueYear,
        issueMonth,
        issueDate,
        dueYear,
        dueMonth,
        dueDate,
    });
    return offerAndPromo.save().then((offerAndPromo) => res.status(201).json(offerAndPromo)).catch(error => res.status(500).json({ error }));
};
const updateofferAndPromo = (req, res, next) => {
    const id = req.params.id;
    return offerAndPromo_model_1.default.findById(id).then((offerAndPromo) => {
        if (offerAndPromo) {
            return offerAndPromo.set(req.body)
                .save().then((offerAndPromo) => res.status(201)
                    .json({ offerAndPromo }))
                .catch(error => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ "message": "offerAndPromo not found" });
        }
    }).catch(error => res.status(500).json({ error }));
};
const getofferAndPromos = (req, res, next) => {
    const companyID = req.params.id;
    const offset = parseInt(req.params.offset);
    const page = parseInt(req.params.page);
    return offerAndPromo_model_1.default.find({}).skip(page * page)
        .limit(offset)
        .then((offerAndPromos) => res.status(200).json({ offerAndPromos }))
        .catch(error => res.status(500).json({ error }));
};
const deleteofferAndPromo = (req, res, next) => {
    const id = req.params.id;
    return offerAndPromo_model_1.default.findByIdAndDelete(id)
        .then(() => res.status(201).json({ success: true }))
        .catch((error) => res.status(500).json({ error }));
};
const getofferAndPromoById = (req, res, next) => {
    const id = req.params.id;
    return offerAndPromo_model_1.default
        .findById(id)
        .then((offerAndPromo) => {
            if (offerAndPromo) {
                return res.status(200).json({
                    offerAndPromo
                });
            }
            else {
                return res.status(404).json({ "message": "offerAndPromo not found" });
            }
        })
        .catch(error => res.status(500).json({ error }));
};
exports.default = { createofferAndPromo, updateofferAndPromo, getofferAndPromos, getofferAndPromoById, deleteofferAndPromo };
