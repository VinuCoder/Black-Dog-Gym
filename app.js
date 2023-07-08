// Express package is to used to help us in routing our website automatically which we do very hard in our tup55 folder (if else and url typing it handel by itself) 

// Writing our first express app


const express=require('express');   //importing express module
const app=express();    // name of app is 'app'
const path=require('path');  // this module is used to enter string 
const fs=require('fs');
const port=80;

// To write a static file
app.use("/static",express.static('static'))  // here second static inside the single is name of folder static files are used to show the same line we write in our js
app.use(express.urlencoded());  // This is used to get our data from form to express

// set the template engine as pug
app.set('view engine','pug');

// Set the views dirctory
app.set('views', path.join(__dirname,'views'));

// Our pug demo endpoint
// app.get('/demo',(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey vinu', message: 'Hello there!' })   // we can search all this code for pug on google
// })

// app.get( "/" , (req,res)=>{
//     res.send("This is home page of my first express app ");  //We can also write it with status code. we run this on postman app
// });

// app.get("/about",(req,res)=>{
//     res.status(200).send("This is about page of my first express app");
// });

// app.post("/error",(req,res)=>{
//     res.status(502).send('Server overload');
// });

// Writing Raw html in index.pug
app.get("/",(req,res)=>{
    const data={'title':"Black-Dog-GYM",'content':"This is the best way to add the raw html file in pug"};
    res.status(200).render('index.pug',data);
});

app.post("/",(req,res)=>{
    Name=req.body.Name     //These statements add our feeded data in output.txt file
    mobile_no=req.body.mobile_no
    address=req.body.address
    more=req.body.more
    let outputToWrite=`The name of the client is ${Name} , and the mobil_no is ${mobile_no} ,The address of the client is ${address} ,more about our client:${more}`
    fs.writeFileSync('output.txt',outputToWrite);

    const data={'message':"Your form has been submitted successfully"}
    res.status(200).render('index.pug',data);
}); 

app.listen(port,()=>{
    console.log(`The app is serving on the port ${port}`);
});