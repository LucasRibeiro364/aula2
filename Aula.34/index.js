const UsuarioModel = require('./src/model/UsuarioModel')

async function criarUsuario() { 
    const dados = {
        nome: 'admin',
        email: 'admin@admin.com.br',
        senha: '123123',
        ativo: true
    }
    const resultado = await UsuarioModel.create(dados)
    console.log(resultado)
}

criarUsuario()