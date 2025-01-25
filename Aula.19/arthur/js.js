//JavaScript

function pegarNome() {
    const saudacao = document.getElementById('saudacao')

    localStorage.setItem('user', JSON.stringify({ nome: 'Nome paia', email: ' example@email.com', senha: 123 }))

    // nome da chave salva no localStorage
    const usuario = localStorage.getItem('user')
    const usuarioFormatado = JSON.parse(usuario)
    return saudacao.innerHTML += usuarioFormatado.nome
}

pegarNome()