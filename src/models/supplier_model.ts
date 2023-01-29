import mongoose , {Schema, Document} from 'mongoose';


export interface Supplier extends Document{
    _id:string;
    name:string;
    Quantity:boolean;
    type:string;
    price:number;
    supplierName:string;
    manufacturer:string;
    status: number,

}

const SupplierSchema:Schema = new Schema({
    name:{type:String, required:true},
    Quantity:{type:Boolean, required:true},
    type:{type:String , required:true},
    price:{type:Number,required:true},
    supplierName:{type:String,required:true},
    manufacturer:{type:String,required:true},
    status: { type: Number, required: true },

});

export default mongoose.model<Supplier>('Supplier', SupplierSchema);