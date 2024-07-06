const cpf = document.querySelector("#cpf")
const senha = document.querySelector("#senha")
const acessarConta = document.querySelector("#acessarConta")

acessarConta.addEventListener("click",(e)=>{
    localStorage.clear()
    fetch("http://localhost:3000/api/usuario/login",{
        method: "POST",
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            senha : senha.value,
            cpf : cpf.value
        })
    }).then(
        response => response.json()
    ).then(
        html =>{
            console.log(html.result)
            let usuario = {
                nome : html.result.nome,
                data : html.result.nascimento,
                email : html.result.email,
                cpf : html.result.cpf,
                telefone : html.result.telefone,
                id : html.result.id

            }
            
            localStorage.usuariosessao = JSON.stringify(usuario)
            console.log(localStorage.usuariosessao)
        } 
       
    )

});
