const form = document.querySelector("#form");
const antigasenha = document.querySelector("#Box1");
const novasenha = document.querySelector("#Box2");
const confsenha = document.querySelector("#Box3");
const confirmarBtn = document.querySelector("#confirmar");
const usuario = JSON.parse(localStorage.usuariosessao);
const olhoSenhaAtual = document.querySelector("#senhaAtual");
const olhoSenhaNova = document.querySelector("#senhaNova");
const olhoConfirmarNova = document.querySelector("#confirmarNova")
console.log(usuario)
const senhaRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#¨])[A-Za-z\d@$!%*?&#¨]{8,}$/;

olhoSenhaAtual.addEventListener("click",(e)=>{
    if (antigasenha.type === "password") {
        antigasenha.type = "text"
        olhoSenhaAtual.src = '../imagens/Olho aberto.png'
    }else{
        antigasenha.type = "password"
        olhoSenhaAtual.src = '../imagens/Olho fechado.png'
    }
})

olhoSenhaNova.addEventListener("click",(e)=>{
    if (novasenha.type === "password") {
        novasenha.type = "text"
        olhoSenhaNova.src = '../imagens/Olho aberto.png'
    }else{
        novasenha.type = "password"
        olhoSenhaNova.src = '../imagens/Olho fechado.png'
    }
})

olhoConfirmarNova.addEventListener("click",(e)=>{
    if (confsenha.type === "password") {
        confsenha.type = "text"
        olhoConfirmarNova.src = '../imagens/Olho aberto.png'
    }else{
        confsenha.type = "password"
        olhoConfirmarNova.src = '../imagens/Olho fechado.png'
    }
})



confirmarBtn.addEventListener("click", (event) =>{
    event.preventDefault();

    if (antigasenha.value !== usuario.senha) {
        antigasenha.style.border = "2px solid red"
        antigasenha.placeholder = "Preencha sua senha"
        return;
    }else{
         antigasenha.style.border = "2px solid #D9D9D9"
    }
    
    if (novasenha.value === "" || !senhaRegex.test(novasenha.value)) {
        novasenha.style.border = "2px solid red"
        novasenha.placeholder = "Preencha sua senha"
        return;
    }else{
        novasenha.style.border = "2px solid #D9D9D9"
   }
  
    if (confsenha.value !== novasenha.value ) {
        confsenha.style.border = "2px solid red"
        confsenha.placeholder = "Preencha sua senha"
        return;
    }
    else{
        confsenha.style.border = "2px solid #D9D9D9"
   }
    fetch('http://localhost:3000/api/usuario/alterarSenha', {
        method: 'PATCH',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            id: usuario.id,
            senhaAtual: antigasenha.value,
            novaSenha: novasenha.value
        })
    }).then(
        response => response.json()
    ).then(
        html =>{
            usuario.senha = JSON.stringify(html.result)
            localStorage.usuariosessao = JSON.stringify(usuario)
            window.location.href = "../html/autenticacao.html"
        } 
    );
});




