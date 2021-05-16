const express= require('express');

const app= express();

app.get('/',(req,res)=>{
    res.send('This is the start');
});

app.get('/welcome',(req,res)=>{
    res.sendfile('welcome.html');
});

app.get('/login',(req,res)=>{
    res.sendfile('login.html');
});

app.get('/register',(req,res)=>{
    res.sendfile('register.html');
});

app.listen(3000,(req,res)=>{
    console.log('Server has started on port 3000...');
});