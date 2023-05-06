import express from "express"
import extractJWT from "../middlewares/extractJWT"
import registered_user_service from "../services/registered_user_service"

const router = express.Router()
// check authentication extractjwt
//end point of api
/**
 * get by Id contraller
 */
router.get("/:id",  registered_user_service.getRegisteredUser)
/**
 *  save contraller
 */
router.post("/",  registered_user_service.createRegisteredUser)
/**
 * update contraller
 */
router.put("/:id",  registered_user_service.updateRegisteredUser)
/**
 * delete contraller
 */
router.delete("/:id", registered_user_service.updateRegisteredUser)

export = router