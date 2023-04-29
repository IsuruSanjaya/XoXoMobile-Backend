import express from "express"
import extractJWT from "../middlewares/extractJWT";
import offerAndPromo_service from "../services/offerAndPromotion_service";

const router = express.Router();
// check authentication extractjwt
//end point of api
/**
 * get all contraller
 */
router.get("/:id/:offset/:page",offerAndPromo_service.getoffers)
/**
 * get by id contraller
 */
router.get("/:id",offerAndPromo_service.getoffersById)
/**
 * save contraller
 */
router.post("/",offerAndPromo_service.createoffers)
/**
 * update contraller
 */
router.put("/:id",offerAndPromo_service.updateoffers)
/**
 * delete contraller
 */
router.delete("/:id",offerAndPromo_service.deleteoffers)


export = router