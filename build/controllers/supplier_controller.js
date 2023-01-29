"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const extractJWT_1 = __importDefault(require("../middlewares/extractJWT"));
const supplier_service_1 = __importDefault(require("../services/supplier_service"));
const router = express_1.default.Router();
router.get("/:id/:offset/:page", extractJWT_1.default, supplier_service_1.default.getsuppliers);
router.get("/:id", extractJWT_1.default, supplier_service_1.default.getsupplierById);
router.post("/create-supplier", supplier_service_1.default.createsupplier);
router.put("/update-supplier/:id", supplier_service_1.default.updatesupplier);
router.delete("/delete-supplier/:id", extractJWT_1.default, supplier_service_1.default.deletesupplier);
module.exports = router;
