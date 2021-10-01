const express = require("express") // Criei uma váriavel para guardar a biblioteca que vou usar no projeto

require('dotenv').config()

const server = express()

server.get('', (request,response) => { //Criação de rotas
    return response.send(process.env.TESTE)
    })

server.get('/usuario', (request,response) => { //Criação de rotas
return response.send("Esse é os seus usuários")
})

//Criação de rotas
server.get('/clientes', (request,response) => {  

    console.log(request.query.usuario)
    return response.send(request.query.usuario)
    })


server.listen(8080) //Escolhendo a porta do servidor
