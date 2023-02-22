import mongoose , {Schema, Document} from 'mongoose';


export interface Financial extends Document{
    bill_id:string;
    Byear:Date;
    Bmonth:Date;
    Bday:Date;
    Bpayee:string;
    Bprice:number;
    Bdescription:string;
    Bbranch:string;
    Btype:boolean;

}

const FinancialSchema:Schema = new Schema({
    Byear:{type:Date, required:true},
    Bmonth:{type:Date, required:true},
    Bday:{type:Date , required:true},
    Bpayee:{type:String,required:true},
    Bprice:{type:Number , required:true},
    Bdescription:{type:String,required:true},
    Bbranch:{type:String,required:true},
    Btype:{type:Boolean,required:true},
});

export default mongoose.model<Financial>('financial', FinancialSchema);