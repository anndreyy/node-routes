/**
 * Entry point for the application.
 */


// Pacote de dependências
const express = require("express") // Criei uma váriavel para guardar a biblioteca que vou usar no projeto
require('dotenv').config()


// Configuração do express
const server = express()

server.get('/', (request,response) => { //Criação de rotas
    return response.send(process.env.TESTE)
})

server.get('/usuario', (request,response) => { //Criação de rotas
    return response.send("Esse é os seus usuários")
})

//Criação de rotas
server.get('/clientes', (request,response) => {
    return response.send(request.query.usuario)
})

server.listen(8080, () =>{
    console.log("Servidor rodando na porta 8080")
} ) // Criação de porta