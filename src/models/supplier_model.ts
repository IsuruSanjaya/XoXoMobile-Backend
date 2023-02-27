import mongoose , {Schema, Document} from 'mongoose';


export interface Supplier extends Document{
    _id:string;
    itemID:string;
    f_name:string;
    L_name:string;
    phone:string;
    companyName:number;
    gender:string;
    address:string;
    email: number,

}

const SupplierSchema:Schema = new Schema({
    f_name:{type:String, required:true},
    L_name:{type:String, required:true},
    phone:{type:String , required:true},
    companyName:{type:String,required:true},
    gender:{type:String,required:true},
    address:{type:String,required:true},
    email: { type: Number, required: true },

});

export default mongoose.model<Supplier>('supplier', SupplierSchema);