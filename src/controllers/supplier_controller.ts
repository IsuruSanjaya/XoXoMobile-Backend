import express from "express"
import extractJWT from "../middlewares/extractJWT";
import supplier_service from "../services/supplier_service";

const router = express.Router();
// check authentication extractjwt
//end point of api
/**
 * get all contraller
 */
router.get("/:id/:offset/:page",extractJWT,supplier_service.getSuppliers)
/**
 * get by id contraller
 */
router.get("/:id",extractJWT,supplier_service.getSupplierById)
/**
 * save contraller
 */
router.post("/create",supplier_service.createSupplier)
/**
 * update contraller
 */
router.put("/:id",supplier_service.updateSupplier)
/**
 * delete contraller
 */
router.delete("/:id",extractJWT,supplier_service.deleteSupplier)


export = router