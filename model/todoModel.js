const mongoose=require('mongoose');

const dbSchema={
    todo:{
        required:true,
        type:String
    }
};
const collection={
    collection:'data',
    timestamp:true
};

const Todo=new mongoose.Schema(dbSchema,collection);

module.exports=mongoose.model('Todo',Todo);