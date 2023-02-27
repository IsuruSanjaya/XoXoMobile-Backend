import customer_model from "../models/customer_model";
import { NextFunction, Request, Response } from 'express';

const createcustomer=(req:Request, res:Response, next: NextFunction)=>{

    const {
      name,
      NIC,
      price,
      BillYear,
      Billmonth,
      BillDate,
      Branch,
      promoCode,
      serialNo,
      ProductID
    
    } =req.body;

    const customer = new customer_model(
        {
         name,
         NIC,
         price,
         BillYear,
         Billmonth,
         BillDate,
         Branch,
         promoCode,
         serialNo,
         ProductID   
        }
    )
    return customer.save().then((customer) => res.status(201).json(customer)).catch(error => res.status(500).json({ error }))

}


const updatecustomer = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return customer_model.findById(id).then((customer) => {
       if (customer) {
          return customer.set(req.body)
             .save().then((customer) => res.status(201)
                .json({ customer }))
             .catch(error => res.status(500).json({ error }))
       } else {
          return res.status(404).json({ "message": "customer not found" })
       }
    }).catch(error => res.status(500).json({ error }))
 
 }
 const getcustomers = (req: Request, res: Response, next: NextFunction) => {
    const companyID: string = req.params.id;
    const offset: number = parseInt(req.params.offset);
    const page: number = parseInt(req.params.page);
 
    const query = { companyId: companyID }
 
    return customer_model
       .find(query).skip(page * page)
       .limit(offset)
       .then((customers) => res.status(200).json({ customers }))
       .catch(error => res.status(500).json({ error }))
 
 
 }
 const deletecustomer = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return customer_model.findByIdAndDelete(id)
       .then(() => res.status(201).json({ success: true }))
       .catch((error) => res.status(500).json({ error }));
 }
 
 const getcustomerById = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return customer_model
       .findById(id)
       .then((customer) => {
          if (customer) {
             return res.status(200).json({
                customer
             })
          } else {
             return res.status(404).json({ "message": "customer not found" })
          }
       })
       .catch(error => res.status(500).json({ error }))
 }

 export default { createcustomer, updatecustomer, getcustomers, getcustomerById, deletecustomer }