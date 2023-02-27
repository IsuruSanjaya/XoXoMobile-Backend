import mongoose , {Schema, Document} from 'mongoose';


export interface Customer extends Document{
    _id:string;
    name:string;
    NIC:string;
    price:string;
    BillYear:string;
    Billmonth:string;
    BillDate:string;
    Branch:string;
    promoCode:string;
    serialNo:string;
    ProductID:string

}

const CustomerSchema:Schema = new Schema({
    name:{type:String, required:true},
    NIC:{type:String,required:true},
    price:{type:String,required:true},
    BillYear:{type:String, required:true},
    Billmonth:{type:String,required:true},
    BillDate:{type:String, required:true},
    Branch:{type:String,required:true},
    promoCode:{type:String, required:true},
    serialNo:{type:String,required:true},
    ProductID:{type:String,required:true},

});

export default mongoose.model<Customer>('customer', CustomerSchema);