import express from "express"
import extractJWT from "../middlewares/extractJWT";
import  branch_service from "../services/branch_service";

const router = express.Router();
// check authentication extractjwt
//end point of api
/**
 * get by all contraller
 */
router.get("/:id/:offset/:page",branch_service.getbranchs)
/**
 *  get by id contraller
 */
router.get("/:id",branch_service.getbranchById)
/**
 *  save item contraller
 */
router.post("/",branch_service.createbranch)
/**
 *  update item contraller
 */
router.put("/:id",branch_service.updatebranch)
/**
 * delete item contraller
 */
router.delete("/:id",branch_service.deletebranch)


export = router

