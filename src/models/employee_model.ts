import mongoose, { Schema, Document } from 'mongoose';


export interface Employee extends Document {
    _id: string;
    name: string;
    designation: string;
    PhoneNo: string;
    NIC: string;
    dob: string;
    gender: boolean;
    email: string;
    DateOFEmployee: Date;
    salary: number;


}

const EmployeeSchema: Schema = new Schema({
    name: { type: String, required: true },
    designation: { type: String, required: true },
    PhoneNo: { type: String, required: true },
    NIC: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: Boolean, required: true },
    email: { type: String, required: true },
    DateOFEmployee: { type: Date, required: true },

});

export default mongoose.model<Employee>('employee', EmployeeSchema);