import mongoose, { Document, Model, Mongoose, Schema } from 'mongoose';

interface ISalary {
    basic: number;
    bonus: number;
    insurance: number;
    epf: number;
    net: number;
}

interface IEmployee extends Document {
    _id: string;
    fname: string;
    lname: string;
    name: string;
    companyId: number;
    customerId: string;
    headerImg: string;
    designation: string;
    DateOFEmployee: string;
    NIC: string;
    PhoneNo: string;
    email: string;
    dob: string;
    gender: string;
    basic: number;
    bonus: number;
    insurance: number;
    epf: number;
    net: number;
}


const employeeSchema: Schema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    name: { type: String, required: true },
    companyId: { type: Number, required: true },
    customerId: { type: String, required: false },
    headerImg: { type: String, required: true },
    designation: { type: String, required: true },
    DateOFEmployee: { type: String, required: true },
    NIC: { type: String, required: true },
    PhoneNo: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: String, required: false },
    gender: { type: String, required: true },
    basic: { type: Number, required: true },
    bonus: { type: Number, required: true },
    insurance: { type: Number, required: true },
    epf: { type: Number, required: false },
    net: { type: Number, required: true },
});


export default mongoose.model<IEmployee>("employees", employeeSchema);