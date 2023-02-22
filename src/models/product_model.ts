import mongoose , {Schema, Document} from 'mongoose';


export interface Product extends Document{
    _id:string;
    name:string;
    quantity:number;
    type:string;
    price:number;
    supplier:string;
    manufacturer:string;
    companyId: string;

}

const ProductSchema:Schema = new Schema({
    name:{type:String, required:true},
    quantity:{type:Number, required:true},
    type:{type:String , required:true},
    price:{type:Number,required:true},
    supplier:{type:String,required:true},
    manufacturer:{type:String,required:true},
    companyId: { type: String, required: true },

});

export default mongoose.model<Product>('product', ProductSchema);