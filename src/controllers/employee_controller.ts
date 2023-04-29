import express from "express"
import extractJWT from "../middlewares/extractJWT";
import  employee_service from "../services/employee_service";

const router = express.Router();
// check authentication extractjwt
//end point of api
/**
 * get by all contraller
 */
router.get("/:id/:page/:offset",employee_service.getemployees)
/**
 *  get by id contraller
 */
router.get("/:id",employee_service.getemployeeById)
/**
 *  save item contraller
 */
router.post("/create",employee_service.createemployee)
/**
 *  update item contraller
 */
router.put("/edit/:id",employee_service.updateemployee)
/**
 * delete item contraller
 */
router.delete("/:id",employee_service.deleteemployee)


export = router

