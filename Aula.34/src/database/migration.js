const Conexao = require('../config/conexao')
const UsuarioModel = require('../model/UsuarioModel')

Conexao.sync({ force: true});

//node migration.js