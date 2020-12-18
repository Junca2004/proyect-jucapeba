const express = require('express');
const app = express();
const path = require('path');
app.set('puerto',80);

// settings
app.set('puerto',80);
app.set('views',path.join(__dirname,'/views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//pages 
app.get('/',(req,res)=>{
    res.render('index.html',{titulo: 'Inicio'});
})
app.get('/catalogo',(req,res)=>{
    res.render('catalogo.html',{titulo: 'Catalogo'});
})
app.get('/agregar',(req,res)=>{
    res.render('agregar.html',{titulo: 'Catalogo'});
})
app.get('/editar',(req,res)=>{
    res.render('editar.html',{titulo: 'Catalogo'});
})
app.get('/interactivo',(req,res)=>{
    res.render('interactivo.html',{titulo: 'Interactivo'});
})

// static files
app.use(express.static(path.join(__dirname,'publics')));
app.listen(process.env.PORT||app.get('puerto'), ()=>{
    console.log('Servidor trabajando en el puerto ',app.get('puerto'));
})