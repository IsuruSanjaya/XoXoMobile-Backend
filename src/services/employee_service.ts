import Employee from "../models/employee_model";
import {NextFunction, Request, Response} from 'express';


const createemployee = async (req: Request, res: Response, next: NextFunction) => {


    const {
        fname,
        lname,
        companyId,
        customerId,
        headerImg,
        designation,
        DateOFEmployee,
        NIC,
        PhoneNo,
        email,
        dob,
        gender,
        basic,
        bonus,
        insurance,
        epf,
        net


    } = req.body;

    const name = fname + " " + lname;
    // const basic = salaryDetail.basic;
    // const bonus = salaryDetail.bonus;
    // const insurance = salaryDetail.insurance;
    // const epf = salaryDetail.epf;
    // const net = salaryDetail.net;
    const employee = new Employee(
        {
            fname,
            lname,
            name,
            companyId,
            customerId,
            headerImg,
            designation,
            DateOFEmployee,
            NIC,
            PhoneNo,
            email,
            dob,
            gender,
            basic,
            bonus,
            insurance,
            epf,
            net


        }
    )
    try {
        const employee_1 = await employee.save();
        return res.status(201).json(employee_1);
    } catch (error) {
        return res.status(500).json({error});
    }

}


const updateemployee = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return Employee.findById(id).then((employee) => {
        if (employee) {
            return employee.set(req.body)
                .save().then((employee) => res.status(201)
                    .json({employee}))
                .catch(error => res.status(500).json({error}))
        } else {
            return res.status(404).json({"message": "employee not found"})
        }
    }).catch(error => res.status(500).json({error}))

}
const getemployees = async (req: Request, res: Response, next: NextFunction) => {
    const companyID: string = req.params.id;
    const offset: number = parseInt(req.params.offset);
    const page: number = parseInt(req.params.page);

    const query = {companyId: companyID}

    return Employee
        .find(query).skip(page * page)
        .limit(offset)
        .then((employees) => res.status(200).json({employees}))
        .catch(error => res.status(500).json({error}))


}
const deleteemployee = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return Employee.findByIdAndDelete(id)
        .then(() => res.status(201).json({success: true}))
        .catch((error) => res.status(500).json({error}));
}

const getemployeeById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    return Employee
        .findById(id)
        .then((employees) => {
            if (employees) {
                return res.status(200).json({
                    employees
                })
            } else {
                return res.status(404).json({"message": "product not found"})
            }
        })
        .catch(error => res.status(500).json({error}))
}

export default {createemployee, updateemployee, getemployees, getemployeeById, deleteemployee}