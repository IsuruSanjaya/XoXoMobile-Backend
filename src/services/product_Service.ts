import product_model from "../models/product_model";
import { NextFunction, Request, Response } from 'express';

const createproduct=(req:Request, res:Response, next: NextFunction)=>{


    const {
    name,
    quantity,
    type,
    price,
    supplier,
    manufacturer,
    } =req.body;

    const product = new product_model(
        {
            name,
            quantity,
            type,
            price,
            supplier,
            manufacturer,   
        }
    )
    return product.save().then((product) => res.status(201).json(product)).catch(error => res.status(500).json({ error }))

}


const updateproduct = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return product_model.findById(id).then((product) => {
       if (product) {
          return product.set(req.body)
             .save().then((product) => res.status(201)
                .json({ product }))
             .catch(error => res.status(500).json({ error }))
       } else {
          return res.status(404).json({ "message": "product not found" })
       }
    }).catch(error => res.status(500).json({ error }))
 
 }
 const getproducts = (req: Request, res: Response, next: NextFunction) => {
    const companyID: string = req.params.id;
    const offset: number = parseInt(req.params.offset);
    const page: number = parseInt(req.params.page);
 
    const query = { companyId: companyID }
 
    return product_model
       .find(query).skip(page * page)
       .limit(offset)
       .then((products) => res.status(200).json({ products }))
       .catch(error => res.status(500).json({ error }))
 
 
 }
 const deleteproduct = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return product_model.findByIdAndDelete(id)
       .then(() => res.status(201).json({ success: true }))
       .catch((error) => res.status(500).json({ error }));
 }
 
 const getproductById = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return product_model
       .findById(id)
       .then((product) => {
          if (product) {
             return res.status(200).json({
                product
             })
          } else {
             return res.status(404).json({ "message": "product not found" })
          }
       })
       .catch(error => res.status(500).json({ error }))
 }

 export default { createproduct, updateproduct, getproducts, getproductById, deleteproduct }