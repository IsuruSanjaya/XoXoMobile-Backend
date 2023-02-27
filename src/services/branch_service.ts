import branch_model from "../models/branch_model";
import { NextFunction, Request, Response } from 'express';

const createbranch = (req: Request, res: Response, next: NextFunction) => {

   const {
      brLocation,
      brManangerID,
      brEmail,
      brContactNo,
      // btCreatedDate,
      // companyId,



   } = req.body;

   const branch = new branch_model(
      {
         brLocation,
         brManangerID,
         brEmail,
         brContactNo,
         // companyId,

         // btCreatedDate,
      }
   )
   return branch.save().then((branch) => res.status(201).json(branch)).catch(error => res.status(500).json({ error }))

}


const updatebranch = (req: Request, res: Response, next: NextFunction) => {
   const id = req.params.id;
   return branch_model.findById(id).then((branch) => {
      if (branch) {
         return branch.set(req.body)
            .save().then((branch) => res.status(201)
               .json({ branch }))
            .catch(error => res.status(500).json({ error }))
      } else {
         return res.status(404).json({ "message": "branch not found" })
      }
   }).catch(error => res.status(500).json({ error }))

}
const getbranchs = (req: Request, res: Response, next: NextFunction) => {
   const companyID: string = req.params.id;
   const offset: number = parseInt(req.params.offset);
   const page: number = parseInt(req.params.page);

   const query = { companyId: companyID }

   return branch_model
      .find(query).skip(page * page)
      .limit(offset)
      .then((branchs) => res.status(200).json({ branchs }))
      .catch(error => res.status(500).json({ error }))


}
const deletebranch = (req: Request, res: Response, next: NextFunction) => {
   const id = req.params.id;
   return branch_model.findByIdAndDelete(id)
      .then(() => res.status(201).json({ success: true }))
      .catch((error) => res.status(500).json({ error }));
}

const getbranchById = (req: Request, res: Response, next: NextFunction) => {
   const id = req.params.id;
   return branch_model
      .findById(id)
      .then((branch) => {
         if (branch) {
            return res.status(200).json({
               branch
            })
         } else {
            return res.status(404).json({ "message": "branch not found" })
         }
      })
      .catch(error => res.status(500).json({ error }))
}

export default { createbranch, updatebranch, getbranchs, getbranchById, deletebranch }