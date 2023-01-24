import offers_model from "../models/offerAndPromotion_model";
import { NextFunction, Request, Response } from 'express';

const createoffers=(req:Request, res:Response, next: NextFunction)=>{

  
    const {
        promoname,
        promodescription,
        discount,
        issueYear,
        issueMonth,
        issueDate,
        dueYear,
        dueMonth,
        dueDate,
        
    
    } =req.body;

    const offers = new offers_model(
        {
        promoname,
        promodescription,
        discount,
        issueYear,
        issueMonth,
        issueDate,
        dueYear,
        dueMonth,
        dueDate,   
        }
    )
    return offers.save().then((offers) => res.status(201).json(offers)).catch(error => res.status(500).json({ error }))

}


const updateoffers = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return offers_model.findById(id).then((offers) => {
       if (offers) {
          return offers.set(req.body)
             .save().then((offers) => res.status(201)
                .json({ offers }))
             .catch(error => res.status(500).json({ error }))
       } else {
          return res.status(404).json({ "message": "offers not found" })
       }
    }).catch(error => res.status(500).json({ error }))
 
 }
 const getoffers = (req: Request, res: Response, next: NextFunction) => {
    const companyID: string = req.params.id;
    const offset: number = parseInt(req.params.offset);
    const page: number = parseInt(req.params.page);
 
    const query = { companyId: companyID }
 
    return offers_model
       .find(query).skip(page * page)
       .limit(offset)
       .then((offerss) => res.status(200).json({ offerss }))
       .catch(error => res.status(500).json({ error }))
 
 
 }
 const deleteoffers = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return offers_model.findByIdAndDelete(id)
       .then(() => res.status(201).json({ success: true }))
       .catch((error) => res.status(500).json({ error }));
 }
 
 const getoffersById = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return offers_model
       .findById(id)
       .then((offers) => {
          if (offers) {
             return res.status(200).json({
                offers
             })
          } else {
             return res.status(404).json({ "message": "offers not found" })
          }
       })
       .catch(error => res.status(500).json({ error }))
 }

 export default { createoffers, updateoffers, getoffers, getoffersById, deleteoffers }