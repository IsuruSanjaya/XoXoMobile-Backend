import mongoose , {Schema, Document} from 'mongoose';


export interface Branch extends Document{
    _id:string;
    brLocation:string;
    brManangerID:string;
    brEmail:string;
    brContactNo:string;
    btCreatedDate:Date;

}

const BranchSchema:Schema = new Schema({
    brLocation:{type:String, required:true},
    brManagerID:{type:String, required:true},
    brEmail:{type:String,required:true},
    brContactNo:{type:String,required:true},
    btCreatedDate:{type:Date,required:true},
});

export default mongoose.model<Branch>('branch', BranchSchema);