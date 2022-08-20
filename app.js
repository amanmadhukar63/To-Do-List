const express= require("express");
const bodyParser= require("body-parser");

const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

var items=[];

app.get("/", function(req,res){

    var today= new Date();
    var option={weekday:'long',year:'numeric',month:'long',day:'numeric'};
    var day=today.toLocaleDateString("en-US",option);
    res.render("list",{din:day,newItem:items} );
//     var day;
//     switch(today.getDay()){
//         case 0 :
//             day="Sunday";
//             break;
//         case 1 :
//             day="Monday";
//             break;
//         case 2 :
//             day="Tuesday";
//             break;
//         case 3 :
//             day="Wednesday";
//             break;
//         case 4 :
//             day="Thursday";
//             break;
//         case 5 :
//             day="Friday";
//             break;
//         case 6 :
//             day="Saturday";
//             break;
//     }
//     res.render("list",{din:day});
});

app.get("/about", function(req,res){
    res.render("about");
});

app.post("/",function(req,res){
    items.push(req.body.listItem);
    res.redirect("/");
});

app.post("/clear",function(req,res){
    items=[];
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("hey i am running...");
});