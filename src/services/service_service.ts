import service_model from "../models/service_model";
import { NextFunction, Request, Response } from 'express';

const createservice=(req:Request, res:Response, next: NextFunction)=>{

    const {
    serialNo,
    mobitelModel,
    warranty_Till,
    CustomerName,
    contactNo,
    receiveDate,
    mobileIMEI,
    technian,
    reasons,
    
    } =req.body;

    const service = new service_model(
        {
         serialNo,
         mobitelModel,
         warranty_Till,
         CustomerName,
         contactNo,
         receiveDate,
         mobileIMEI,
         technian,
         reasons,   
        }
    )
    return service.save().then((service) => res.status(201).json(service)).catch(error => res.status(500).json({ error }))

}


const updateservice = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return service_model.findById(id).then((service) => {
       if (service) {
          return service.set(req.body)
             .save().then((service) => res.status(201)
                .json({ service }))
             .catch(error => res.status(500).json({ error }))
       } else {
          return res.status(404).json({ "message": "service not found" })
       }
    }).catch(error => res.status(500).json({ error }))
 
 }
 const getservices = (req: Request, res: Response, next: NextFunction) => {
    const companyID: string = req.params.id;
    const offset: number = parseInt(req.params.offset);
    const page: number = parseInt(req.params.page);
 
    const query = { companyId: companyID }
 
    return service_model
       .find(query).skip(page * page)
       .limit(offset)
       .then((services) => res.status(200).json({ services }))
       .catch(error => res.status(500).json({ error }))
 
 
 }
 const deleteservice = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return service_model.findByIdAndDelete(id)
       .then(() => res.status(201).json({ success: true }))
       .catch((error) => res.status(500).json({ error }));
 }
 
 const getserviceById = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return service_model
       .findById(id)
       .then((service) => {
          if (service) {
             return res.status(200).json({
                service
             })
          } else {
             return res.status(404).json({ "message": "service not found" })
          }
       })
       .catch(error => res.status(500).json({ error }))
 }

 export default { createservice, updateservice, getservices, getserviceById, deleteservice }