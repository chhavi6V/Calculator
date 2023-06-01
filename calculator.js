const express = require('express');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post('/',function(req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1+  num2;
    res.send("The result for your calculation is " + result);
})

app.get('/bmiCalculator',function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post('/bmiCalculator', function(req,res){
    var weight = parseFloat(req.body.W);
    var height = parseFloat(req.body.H);
    var ans = weight / (height * height);
    res.send("Your BMI is "+ ans);
})


app.listen(3000,function(){
    console.log("port 3000 has started");
});