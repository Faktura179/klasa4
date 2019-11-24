var express = require("express")

var app = express()

app.use(express.json());

const PORT = 3000;

var users=[{user:"ABC",pass:"XD"},{user:"Jan",pass:"123"}]

app.post("/", function (req, res) {
    var add = true
    for(var i in users){
        if(users[i].user==req.body.user){
            add = false
        }
    }
    if(add){
        users.push(req.body)
        res.send(true)
    }
    else{
        res.send(false)
    }
    //console.log(users)
    
})
app.post("/login",function(req,res){
    var add = true
    for(var i in users){
        //console.log(users[i],req.body,JSON.stringify( users[i] ) == JSON.stringify( req.body ))
        if(JSON.stringify(users[i])==JSON.stringify(req.body)){
            res.send(true)
            add=false
        }
    }
    if(add){
        res.send(false)
    }
})
app.post("/getusers",function(req,res){
    res.send(users)
})
app.post("/delete",function(req,res){
    var flag = true
    for(var i in users){
        if(JSON.stringify(users[i])==JSON.stringify(req.body)){
            users.splice(i,1)
            flag=false
            res.send(true)
        }
    }
    console.log(users)
    if(flag)
        res.send(false)
})  
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})