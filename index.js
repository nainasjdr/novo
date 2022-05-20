const express=require('express');// determinando a utilização do express
const app=express();
const path=require ('path');//enderço de cada rota
const router=express.Router();// trabalha com as rotas
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
})

app.use('/',router);
app.use('/about',router);
app.listen(process.env.port||3000);
console.log("Servidor rodando");
