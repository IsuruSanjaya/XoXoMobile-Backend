import financial_model from "../models/financial_model";
import { NextFunction, Request, Response } from 'express';

const createfinancial=(req:Request, res:Response, next: NextFunction)=>{

  
    const {
        Byear,
        Bmonth,
        Bday,
        Bpayee,
        Bprice,
        Bdescription,
        Bbranch,
        Btype,
        
    
    } =req.body;

    const financial = new financial_model(
        {
            Byear,
            Bmonth,
            Bday,
            Bpayee,
            Bprice,
            Bdescription,
            Bbranch,
            Btype,   
        }
    )
    return financial.save().then((financial) => res.status(201).json(financial)).catch(error => res.status(500).json({ error }))

}


const updatefinancial = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return financial_model.findById(id).then((financial) => {
       if (financial) {
          return financial.set(req.body)
             .save().then((financial) => res.status(201)
                .json({ financial }))
             .catch(error => res.status(500).json({ error }))
       } else {
          return res.status(404).json({ "message": "financial not found" })
       }
    }).catch(error => res.status(500).json({ error }))
 
 }
 const getfinancial = (req: Request, res: Response, next: NextFunction) => {
    const companyID: string = req.params.id;
    const offset: number = parseInt(req.params.offset);
    const page: number = parseInt(req.params.page);
 
    const query = { companyId: companyID }
 
    return financial_model
       .find(query).skip(page * page)
       .limit(offset)
       .then((financials) => res.status(200).json({ financials }))
       .catch(error => res.status(500).json({ error }))
 
 
 }
 const deletefinancial = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return financial_model.findByIdAndDelete(id)
       .then(() => res.status(201).json({ success: true }))
       .catch((error) => res.status(500).json({ error }));
 }
 
 const getfinancialById = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return financial_model
       .findById(id)
       .then((financial) => {
          if (financial) {
             return res.status(200).json({
                financial
             })
          } else {
             return res.status(404).json({ "message": "financial not found" })
          }
       })
       .catch(error => res.status(500).json({ error }))
 }

 export default { createfinancial, updatefinancial, getfinancial, getfinancialById, deletefinancial }