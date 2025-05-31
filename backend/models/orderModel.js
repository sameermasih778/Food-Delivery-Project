import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId:{type:String,requred:true},
     items:{type:Array,requred:true},
      amount:{type:Number,requred:true},
       address:{type:Object,requred:true},
        status:{type:String,default:"Food Processing"},
         userId:{type:String,requred:true},
         date:{type:Date,default:Date.now()},
         payment:{type:Boolean,default:false}
})

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema);
export default orderModel;