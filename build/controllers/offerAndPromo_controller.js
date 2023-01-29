"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const extractJWT_1 = __importDefault(require("../middlewares/extractJWT"));
const offerAndPromo_service_1 = __importDefault(require("../services/offerAndPromo_service"));
const router = express_1.default.Router();
router.get("/:id/:offset/:page", extractJWT_1.default, offerAndPromo_service_1.default.getofferAndPromos);
router.get("/:id", extractJWT_1.default, offerAndPromo_service_1.default.getofferAndPromoById);
router.post("/create-offerAndPromo", offerAndPromo_service_1.default.createofferAndPromo);
router.put("/update-offerAndPromo/:id", offerAndPromo_service_1.default.updateofferAndPromo);
router.delete("/delete-offerAndPromo/:id", extractJWT_1.default, offerAndPromo_service_1.default.deleteofferAndPromo);
module.exports = router;
