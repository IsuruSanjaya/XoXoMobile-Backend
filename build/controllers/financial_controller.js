"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const extractJWT_1 = __importDefault(require("../middlewares/extractJWT"));
const financial_service_1 = __importDefault(require("../services/financial_service"));
const router = express_1.default.Router();
router.get("/:id/:offset/:page", extractJWT_1.default, financial_service_1.default.getfinancials);
router.get("/:id", extractJWT_1.default, financial_service_1.default.getfinancialById);
router.post("/create-financial", financial_service_1.default.createfinancial);
router.put("/update-financial/:id", financial_service_1.default.updatefinancial);
router.delete("/delete-financial/:id", extractJWT_1.default, financial_service_1.default.deletefinancial);
module.exports = router;
