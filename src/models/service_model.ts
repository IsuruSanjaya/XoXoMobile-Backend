import mongoose , {Schema, Document} from 'mongoose';


export interface Service extends Document{
    _id : string,
    serialNo:string,
    mobitelModel:string;
    warranty_Till:string;
    CustomerName:string;
    contactNo:string;
    receiveDate:Date;
    mobileIMEI:string;
    technian:string;
    reasons:string;
    

}

const ServiceSchema:Schema = new Schema({
    serialNo:{type:String, required:true},

    mobitelModel:{type:String, required:true},
    warranty_Till:{type:String, required:true},
    CustomerName:{type:String,required:true},
    contactNo:{type:String,required:true},
    receiveDate:{type:Date,required:true},
    mobileIMEI:{type:String,required:true},
    technian:{type:String,required:true},
    reasons:{type:String,required:true},
});

export default mongoose.model<Service>('service', ServiceSchema);