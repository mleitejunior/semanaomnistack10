const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://mleitejunior:spaiders123@cluster0-8gfyn.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);

app.listen(3333);


//MÉTODOS HTTP
//GET (receber, listar usuarios etc.), POST (criar alguma informacao, salvar produto etc.), 
//PUT (editar informação), DELETE (apagar)

//Tipos de parametros no express
//Query params: req.query (Filtros, ordenação, paginação, ...)
//Route params: req.params (Identificar um recurso na alteração ou remoção)
//Body: req.body (Dados para criação ou alteração de um registro)

//MongoDB (Banco Não-relacional)