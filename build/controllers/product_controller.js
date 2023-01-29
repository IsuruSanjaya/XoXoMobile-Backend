"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const extractJWT_1 = __importDefault(require("../middlewares/extractJWT"));
const product_service_1 = __importDefault(require("../services/product_service"));
const router = express_1.default.Router();
router.get("/:id/:offset/:page", extractJWT_1.default, product_service_1.default.getproducts);
router.get("/:id", extractJWT_1.default, product_service_1.default.getproductById);
router.post("/", product_service_1.default.createproduct);
router.put("/:id", product_service_1.default.updateproduct);
router.delete("/:id", extractJWT_1.default, product_service_1.default.deleteproduct);
module.exports = router;
