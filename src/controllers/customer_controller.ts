import express from "express"
import extractJWT from "../middlewares/extractJWT";
import  customer_service from "../services/customer_service";

const router = express.Router();
// check authentication extractjwt
//end point of api
/**
 * get by all contraller
 */
router.get("/:id/:offset/:page",extractJWT,customer_service.getcustomers)
/**
 *  get by id contraller
 */
router.get("/:id",extractJWT,customer_service.getcustomerById)
/**
 *  save item contraller
 */
router.post("/",customer_service.createcustomer)
/**
 *  update item contraller
 */
router.put("/:id",customer_service.updatecustomer)
/**
 * delete item contraller
 */
router.delete("/:id",extractJWT,customer_service.deletecustomer)


export = router

