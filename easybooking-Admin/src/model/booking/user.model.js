const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const COLLECTION_NAME="user";

const list=new Schema({
    name:String,
    phone:String,
    address:String,
    email:String,
});

const newSchema=new Schema({
   username:{
         type:String,
         required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
        enum:["admin","user"],
    },
    userinformation:{
        type:[list],
        default:[],
    },
    avatar:{
        type:String,
    },
    status:{
        type:String,
        default:"inactive",
        enum:["active","inactive"],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
},
{
    timestamps:true,
    collection:COLLECTION_NAME,
}
);
module.exports=mongoose.model(COLLECTION_NAME,newSchema);