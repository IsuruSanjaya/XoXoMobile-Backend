import mongoose , {Schema, Document} from 'mongoose';


export interface Customer extends Document{
    _id:string;
    fname:string;
    lname:string;
    PhoneNo:string;
    NIC:string;
    email:string;

}

const CustomerSchema:Schema = new Schema({
    fname:{type:String, required:true},
    lname:{type:String, required:true},
    PhoneNo:{type:String,required:true},
    NIC:{type:String,required:true},
    email:{type:String,required:true},
});

export default mongoose.model<Customer>('Customer', CustomerSchema);