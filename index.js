/**
 * Entry point for the application.
 */


// Pacote de dependências
const express = require("express") // Criei uma váriavel para guardar a biblioteca que vou usar no projeto
require('dotenv').config()


// Configuração do express
const server = express()

//server.get('/', (request, response) => { //Criação de rotas
 //   return response.send(process.env.TESTE)
//})

server.get('/usuario', (request, response) => { //Criação de rotas
    return response.send("Esse é os seus usuários")
})

//Criação de rotas
server.get('/clientes', (request, response) => {
    return response.send(request.query.usuario)
})

server.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando na porta 3000")
}) // Criação de porta
/*
if(process.env.PORT){
    return console.log("Rodando no servidor")

}else{
    return console.log("Rodando local")
}
*/