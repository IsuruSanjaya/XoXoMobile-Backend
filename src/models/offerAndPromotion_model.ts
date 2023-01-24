import mongoose , {Schema, Document} from 'mongoose';


export interface Offers extends Document{
    _id:string;
    promoname:string;
    promodescription:string;
    discount:string;
    issueYear:Date;
    issueMonth:Date;
    issueDate:Date;
    dueYear:Date;
    dueMonth:Date;
    dueDate:Date;

}

const OffersSchema:Schema = new Schema({
    promoname:{type:String, required:true},
    promodescription:{type:String, required:true},
    discount:{type:String , required:true},
    issueYear:{type:Date,required:true},
    issueMonth:{type:Date,required:true},
    issueDate:{type:Date,required:true},
    dueYear:{type:Date,required:true},
    dueMonth:{type:Date,required:true},
    dueDate:{type:Date,required:true},

});

export default mongoose.model<Offers>('Offers', OffersSchema);