import mongoose from "mongoose";

const jobSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:[{
        type:String,
    }],
    location:{
        type:String,
    },
    salary:{
        type:Number,
    },
    experience:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
    },
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    application:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Application"
        }
    ]

},{timestamps:true});

const Job =mongoose.model("Job",jobSchema);
export default Job;