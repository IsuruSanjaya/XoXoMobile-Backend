import Supplier_model from "../models/supplier_model";
import { NextFunction, Request, Response } from 'express';

const createSupplier=(req:Request, res:Response, next: NextFunction)=>{
  

    const {
        name,
        quantity,
        type,
        price,
        supplierName,
        manufacturer,
    
    } =req.body;

    const Supplier = new Supplier_model(
        {
            name,
            quantity,
            type,
            price,
            supplierName,
            manufacturer, 
        }
    )
    return Supplier.save().then((Supplier) => res.status(201).json(Supplier)).catch(error => res.status(500).json({ error }))

}


const updateSupplier = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return Supplier_model.findById(id).then((Supplier) => {
       if (Supplier) {
          return Supplier.set(req.body)
             .save().then((Supplier) => res.status(201)
                .json({ Supplier }))
             .catch(error => res.status(500).json({ error }))
       } else {
          return res.status(404).json({ "message": "Supplier not found" })
       }
    }).catch(error => res.status(500).json({ error }))
 
 }
 const getSuppliers = (req: Request, res: Response, next: NextFunction) => {
    const companyID: string = req.params.id;
    const offset: number = parseInt(req.params.offset);
    const page: number = parseInt(req.params.page);
 
    const query = { companyId: companyID }
 
    return Supplier_model
       .find(query).skip(page * page)
       .limit(offset)
       .then((Suppliers) => res.status(200).json({ Suppliers }))
       .catch(error => res.status(500).json({ error }))
 
 
 }
 const deleteSupplier = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return Supplier_model.findByIdAndDelete(id)
       .then(() => res.status(201).json({ success: true }))
       .catch((error) => res.status(500).json({ error }));
 }
 
 const getSupplierById = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return Supplier_model
       .findById(id)
       .then((Supplier) => {
          if (Supplier) {
             return res.status(200).json({
                Supplier
             })
          } else {
             return res.status(404).json({ "message": "Supplier not found" })
          }
       })
       .catch(error => res.status(500).json({ error }))
 }

 export default { createSupplier, updateSupplier, getSuppliers, getSupplierById, deleteSupplier }