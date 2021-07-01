const route=require('./route/todoRoute');


const cloud="mongodb+srv://vishnumm:vishnumm@cluster0.ojqef.mongodb.net/todo?retryWrites=true&w=majority";

const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const config=require('./config');
const dotenv=require('dotenv');
dotenv.config();
const app=express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views','./views');

mongoose.connect(cloud,{
    useFindAndModify:false,
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
},(err)=>{
    if(err) throw err;
    console.log("connected to  mongodb")
});

app.use('/',route);

app.listen(4000,function(){
    console.log("local host connected to 4000");
});