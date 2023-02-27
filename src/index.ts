"use strict";
import express from "express"
import http from "http"
import mongoose from "mongoose"
import Logging from "./library/Loggin"
const cors = require("cors");
const router = express()
router.use(cors());
/**constorllers */

const suppilerController = require("./controllers/supplier_controller")
const offerAndPromotionController = require("./controllers/offerAndPromotion_controller")
const employeeController = require("./controllers/employee_controller")
const customerController = require("./controllers/customer_controller")
const financialController = require("./controllers/financial_controller")
const productController = require("./controllers/product_controller")
const branchController = require("./controllers/branch_controller")
const serviceController = require ("./controllers/service_controller")
// 
//const db_url = "mongodb+srv://root:root123@cluster0.axvyf.mongodb.net/test"
const db_url = "mongodb://db-itp:u9i7EW85Ez9N2fZRFvHOXTZG8B5jbX5zzMrAcM0ciTYbU11fKVXbOHKiVZzkiQr54Qe8X4XdPqwlDPekPANqFw==@db-itp.mongo.cosmos.azure.com:10255/erp_2022?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@db-itp@";
const port = 8090
/* Connect to Mongo */
mongoose.connect(db_url)
   .then(() => {
      Logging.info('Mongo connected successfully.');
      StartServer();
   })
   .catch(err => {
      Logging.error(err)
   })


/** Onli start if the server if Mongo connects  */

const StartServer = () => {
   router.use((req, res, next) => {
      /** Log the request */
      Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

      res.on('finish', () => {
         /** Log the res */
         Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
      });

      next(); /**allow to pass through the middleware to next tasks */
   })

   router.use(express.urlencoded({ extended: true }));
   router.use(express.json());

   /** Rules of our API */
   router.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

      if (req.method == 'OPTIONS') {
         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
         return res.status(200).json({});
      }

      next();
   });

   /** Routes */

   router.use("/customer-order",customerController);
   router.use("/supplier_controller",suppilerController);
   router.use("/offerAndPromo-controller",offerAndPromotionController);
   router.use("/financial-order-controller",financialController);
   router.use("/employee-controller",employeeController);
   router.use("/product-controller",productController);
   router.use("/branch-controller", branchController)
router .use ("/service-controller",serviceController)
   /** Healthcheck */
   router.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));

   /** Error handling */
   router.use((req, res, next) => {
      const error = new Error('Not found');

      Logging.error(error);

      res.status(404).json({
         message: error.message
      });
   });

  // http.createServer(router).listen(8090, () => Logging.info(`Server is running on port ${8090}`));
  router.set("port", process.env.PORT || 3000);

  router.listen(process.env.PORT,()=>{
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
}