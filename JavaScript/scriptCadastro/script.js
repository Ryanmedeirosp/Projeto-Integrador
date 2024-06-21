const nomeCompleto = document.querySelector("#box1")
const cpf = document.querySelector("#Box2")
const dataNascimento = document.querySelector("#box3")
const email = document.querySelector("#box4")
const telefone = document.querySelector("#box5")
const senha = document.querySelector("#box6")
const confirmarSenha = document.querySelector("#box7")
const botao = document.querySelector("#btn")



botao.addEventListener("click", (event) => {
    event.preventDefault()
    if ((nomeCompleto === null) && (cpf === null) && (dataNascimento === null) && (email === null) && (telefone === null) && (senha === null) && (confirmarSenha === null)) {
        alert("existem campos vázios")
    }

    if (cpf.value.length < 11) {
        alert("cpf incorreto")
    }

    

});

cpf.addEventListener("input", (event) => {
    
    if(cpf.value.length == 12) {
        cpf.value = cpf.value.slice(0, -1)
    }
});