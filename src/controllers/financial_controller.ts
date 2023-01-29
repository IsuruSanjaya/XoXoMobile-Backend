import express from "express"
import extractJWT from "../middlewares/extractJWT";
import  financial_service from "../services/financial_service";

const router = express.Router();
// check authentication extractjwt
//end point of api
/**
 * get by all contraller
 */
router.get("/:id/:offset/:page",extractJWT,financial_service.getfinancial)
/**
 *  get by id contraller
 */
router.get("/:id",extractJWT,financial_service.getfinancialById)
/**
 *  save item contraller
 */
router.post("/",financial_service.createfinancial)
/**
 *  update item contraller
 */
router.put("/:id",financial_service.updatefinancial)
/**
 * delete item contraller
 */
router.delete("/:id",extractJWT,financial_service.deletefinancial)


export = router

