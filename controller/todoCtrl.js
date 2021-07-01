const Todo=require('../model/todoModel');

const todoCtrl={
    home:async(req,res)=>{
        const todo=await Todo.find();
        res.render('home.ejs',{todo:todo});

    },
    create:async(req,res)=>{
       const data=new Todo(req.body);
       await data.save();
       res.redirect('/');
    },
    getData:async(req,res)=>{
        const id=req.params.id;
        const todo=await Todo.findOne({_id:id});
        res.render('update.ejs',{todo:todo});
    },
    update:async(req,res)=>{
        const tid=req.params.id;
        const {todo}=req.body;
        await Todo.findOneAndUpdate({_id:tid},{todo});
        console.log("updated");
        res.redirect('/');
    },
    delete:async(req,res)=>{
        const id=req.params.id;
        await Todo.findByIdAndDelete({_id:id});
        res.redirect('/');
    }

};

module.exports=todoCtrl;