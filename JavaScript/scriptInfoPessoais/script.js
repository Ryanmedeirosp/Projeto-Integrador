const cpf = document.querySelector("#Box4");
const nome = document.querySelector("#Box1");
const email = document.querySelector("#Box2");
const telefone = document.querySelector("#Box3");
const nascimento = document.querySelector("#Box5");
const botaoSalvar = document.querySelector("#botaoSalvar")
const usuario = JSON.parse(localStorage.usuariosessao)



window.onload = () =>{
     
    console.log(usuario.id)

    preencherCampus()
}

function preencherCampus(){
    cpf.value = usuario.cpf
    nome.value = usuario.nome
    email.value = usuario.email
    telefone.value = usuario.telefone
    nascimento.value = usuario.nascimento
}


botaoSalvar.addEventListener("click", (e)=>{
    fetch("http://localhost:3000/api/usuario/alterar",{
        method: "PUT",
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            
            nome: nome.value,
            nascimento : nascimento.value,
            email : email.value,
            cpf : cpf.value,
            telefone : telefone.value,
            id : usuario.id
            
        })
    }).then(
        response => response.json()
    ).then(
        html =>{
            console.log(html)
            localStorage.usuariosessao = JSON.stringify(html.result)
            location.reload()
           
        } 
    )
    
})
