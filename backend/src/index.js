const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const { MONGO_USER, MONGO_PASS, MONGO_DB } = require('../.env');

const app = express();
mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0-8gfyn.mongodb.net/${MONGO_DB}?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, {
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