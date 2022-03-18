const expressv = require("express");
const cors = require("cors");
const bodeyparser = require("body-parser");
const mongodb = require("mongodb").MongoClient;
const {error} = require("console");


const app = expressv();

app.use(cors());

app.use(bodeyparser.json());

  
var db;

mongodb.connect("mongodb+srv://vamsi:vamsi@hotelcluster.eubte.mongodb.net/vamsi?retryWrites=true&w=majority",(error,result)=>{
    if(error){
        console.log("DB not connected");
    }
    else{
        db= result.db("vamsi");
        console.log("DB connected");
    }
});

app.post("/register",(req,res)=>{
    console.log(req.body);
    req.body._id=new Date().getTime();
    db.collection("Hotelreservation").save(req.body,(error,data)=>{
        if(error){
            res.status(403).json("Something went wrong");
        }
        else{   
            res.json("User registered successfully");
        }
    });
});

app.get("/registername/:regusername",(req,res)=>{
    console.log(req.params);
    db.collection("Hotelreservation").find({uname : req.params.regusername},{projection : {_id:1}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finding user availability");
        }
        else{
            res.json(data);
        }
    })
})
      
app.post("/login",(req,res)=>{
    console.log(req.body);
    db.collection("Hotelreservation").find(req.body,{projection :{_id:1,uname:1}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("Something went wrong");
        }
        else{
            res.json(data);
        }
    });
});

app.post("/allhotels",(req,res)=>{
    console.log();
    req.body._id=new Date().getTime();
    db.collection("hotels").save(req.body,(error,data)=>{
        if(error){
            res.status(403).json("Something went wrong");
        }
        else{
            res.json("HOTEL SUCCESSFULLY ADDED");
        }
    });
});

app.get("/managehotels",(req,res)=>{
    console.log(req.body);
    db.collection("hotels").find().toArray((error,data)=>{
        if(error){
            res.status(403).json("Error in managing hotels");
        }
        else{
            res.json(data);
        }
    });
})

app.get("/pagetobook",(req,res)=>{
    console.log(req.body);
    db.collection("hotels").find().toArray((error,data)=>{
        if(error){
            res.status(403).json("Error in booking page");
        }
        else{
            res.json(data);
        }
    });
})

app.get("/hotelname/:reghotelname",(req,res)=>{
    console.log(req.params);

    db.collection("hotels").find({uname : req.params.regusername},{projection : {_id:1}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finding user availability");
        }
        else{
            res.json(data);
        }
    });
    
});

app.post("/booknowbutton",(req,res)=>{
    console.log(req.body);
    req.body._id=new Date().getTime();
    db.collection("bookhotel").save(req.body,(error,data)=>{
        if(error){
            res.status(403).json("Something went wrong");
        }
        else{
            res.json("COUSTOMER YET TO MAKE PAYMENT");
        }
    });
});

app.get("/customerdata",(req,res)=>{
    console.log(req.body);
    db.collection("bookhotel").find().toArray((error,data)=>{
        if(error){
            res.status(403).json("Error in customer data");
        }
        else{
            res.json(data);
        }
    })
})


//getthoteldetails

app.get("/getuser/:hotelid",(req,res)=>{

    console.log(req.params);

    db.collection("hotels").find({_id : Number(req.params.hotelid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("Error in customer data");
        }
        else{
            res.json(data);
        }
    })
});


app.put("/updatehotel",(req,res)=>{

    console.log(req.body);

    var condition ={_id : req.body._id};

    var newValues ={$set:{uname: req.body.uname,uemail: req.body.uemail,urate:req.body.urate,uphone : req.body.uphone}};

    db.collection("hotels").update(condition,newValues,(error,data)=>{
        if(error){
            res.status(403).json("Error in updating ");
        }
        else{
                res.json("Hotel details updated successfully");
        }
    })
    
})
    
app.delete("/deletehotel/:hotelid",(req,res)=>{
    console.log(req.params);

    db.collection("hotels").deleteOne({_id: Number(req.params.hotelid)},(error,data)=>{

        res.json("Hotel deleted successfully");

    });

});

app.get("/search/:searchtext?",(req,res)=>{

    console.log(req.params);

    if(req.params.searchtext!=undefined){

        var search = new RegExp(req.params.searchtext, 'i');
        var searchcond = {uname :search};
    }
    else{
        var searchcond = null;    
    }

    db.collection("hotels").find(searchcond).toArray((error,data)=>{

        res.json(data);
    })


});

app.get("/searchinbookingpage/:searchtext?",(req,res)=>{

    console.log(req.params);

    if(req.params.searchtext!=undefined){

        var search = new RegExp(req.params.searchtext, 'i');
        var searchcond = {uname :search};
    }
    else{
        var searchcond = null;    
    }

    db.collection("hotels").find(searchcond).toArray((error,data)=>{

        res.json(data);
    })


});


app.get("/mybookings/:userId",(req,res)=>{

    console.log(req.params.userId);

    db.collection("bookhotel").find({requestedby:String(req.params.userId)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("Error in finding hotelname ");
        }
        else{
            res.json(data);
        }
    });


});

app.get("/booknow/:hotelid",(req,res)=>{
    db.collection("hotels").find({_id:Number(req.params.hotelid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("Coulnot find req data")
        }else{
            res.json(data);
        }
    })
})



module.exports=app;