import express from "express"
import extractJWT from "../middlewares/extractJWT";
import  service_service from "../services/service_service";

const router = express.Router();
// check authentication extractjwt
//end point of api
/**
 * get by all contraller
 */
router.get("/:id/:offset/:page",extractJWT,service_service.getservices)
/**
 *  get by id contraller
 */
router.get("/:id",service_service.getserviceById)
/**
 *  save item contraller
 */
router.post("/",service_service.createservice)
/**
 *  update item contraller
 */
router.put("/:id",service_service.updateservice)
/**
 * delete item contraller
 */
router.delete("/:id",service_service.deleteservice)


export = router

