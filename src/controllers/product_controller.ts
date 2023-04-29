import express from "express"
import extractJWT from "../middlewares/extractJWT";
import product_service from "../services/product_Service";

const router = express.Router();
// check authentication extractjwt
//end point of api
/**
 * get by all contraller
 */
router.get("/:id/:offset/:page",product_service.getproducts)
/**
 *  get by id contraller
 */
router.get("/:id",product_service.getproductById)
/**
 *  save item contraller
 */
router.post("/",product_service.createproduct)
/**
 *  update item contraller
 */
router.put("/:id",product_service.updateproduct)
/**
 * delete item contraller
 */
router.delete("/:id",product_service.deleteproduct)


export = router

