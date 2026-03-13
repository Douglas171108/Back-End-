const express = require('express');

const servidor = express();


//Criando o nosso andpoint 
servidor.get("/hello", (req, res) => {
    res.send("Servidor do Douglas")
})

servidor.listen(3000, () => {
    console.log("Servidor na porta 3000 está funfando")
})