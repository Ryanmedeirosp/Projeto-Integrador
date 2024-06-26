const form = document.querySelector("#form")
const nomeCompleto = document.querySelector("#Box1")
const cpf = document.querySelector("#Box2")
const dataNascimento = document.querySelector("#Box3")
const email = document.querySelector("#Box4")
const telefone = document.querySelector("#Box5")
const senha = document.querySelector("#Box6")
const confirmarSenha = document.querySelector("#Box7")
const botao = document.querySelector("#btn")
const span = document.querySelector("#p1")


function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );

    return emailRegex.test(email);
}

function validarTelefone(telefone) {
    // Remove todos os caracteres que não são dígitos
    telefone.value = telefone.value.replace(/\D/g, '');

    // Limita a quantidade máxima de dígitos para 11
    telefone.value = telefone.value.slice(0, 11);

    // Formatação do telefone com DDD entre parênteses e a divisória no meio
    if (telefone.value.length === 10) {

       telefone.value =  telefone.value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
       return

    } else if (telefone.value.length === 11) {

       telefone.value = telefone.value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
       return
    }

    // Retorna uma string vazia se o telefone não estiver no formato esperado
    return '';
}

confirmarSenha.addEventListener("input",(e)=>{
    if (confirmarSenha.value !== senha.value) {
        confirmarSenha.style.border = " 3px solid red"
        span.textContent = "Suas senhas não estão iguais"
        senha.style.border = " 3px solid red"
        
    }else{
        confirmarSenha.style.border = " 3px solid white"

        span.textContent = "Ao clicar em Enviar informações você autoriza a RD Investimentos a coletar seus dados pessoais de acordo com a nossa Política de Privacidade com o objetivo de comunicar informações sobre o processo de abertura da sua conta."

        senha.style.border = " 3px solid white"
        
    }
})

function validarLetras(input) {
    
    input.value = input.value.replace(/[^a-zA-Záàâãéèêíïóôõöúçñ\s]/g, '');
}

nomeCompleto.addEventListener("input",(e)=>{

    validarLetras(nomeCompleto)

})


telefone.addEventListener("input",(e)=>{

    validarTelefone(telefone)

})




botao.addEventListener("click", (event) => {
   
    if (nomeCompleto.value =="" ) {
        nomeCompleto.style.border = " 3px solid red"
        nomeCompleto.placeholder = "Preencha seu nome"

    }

    if(nomeCompleto.value !==""){
        nomeCompleto.style.border = " 3px solid green"
        nomeCompleto.placeholder = ""
    }

    if (cpf.value == "" || !validaCPF(cpf.value)) {
        cpf.style.border = " 3px solid red"
        cpf.placeholder = "Preencha seu CPF"
        
    }else{
        cpf.style.border = " 3px solid green"
        cpf.placeholder = ""
    }


    if (dataNascimento.value == "") {
        dataNascimento.style.border = " 3px solid red"
    }

    if (dataNascimento.value !== "") {
        dataNascimento.style.border = " 3px solid green"
    }

    if (email.value == "" || !isEmailValid(email.value))  {
        
        email.style.border = " 3px solid red"
        email.placeholder = "Preencha seu email"
        
    }else{

        email.style.border = " 3px solid green"
        email.placeholder = ""
    }

   

    if (telefone.value == "" || validarTelefone(telefone) ===   '' ) {
        telefone.style.border = " 3px solid red"
        telefone.placeholder = "Preencha seu telefone"
        
    }else{
          telefone.style.border = " 3px solid green"
        telefone.placeholder = ""

    }

   

    if (senha.value == "") {
        senha.style.border = " 3px solid red"
        senha.placeholder = "Preencha sua senha"
        
    }

    if (confirmarSenha.value == "") {
        confirmarSenha.style.border = " 3px solid red"
        confirmarSenha.placeholder = "Preencha sua senha"
        
    }
    

    if (cpf.value.length < 11) {
        console.log("campo CPF não preenchido corretamente.")
    }
    console.log(validaCPF(cpf.value))
});

cpf.addEventListener("input", (event) => {

    let currentValue = cpf.value;

    currentValue = currentValue.replace(/[^0-9.\\-]/g, '');

    cpf.value = currentValue;

    let ultimoChar = currentValue.slice(-1);

    if(event.inputType === "deleteContentBackward") {

        cpf.value = currentValue.slice(0, -1);

    } else {
        
        let inputLength = currentValue.length;

        if (inputLength === 3 || inputLength === 7) {

            cpf.value += ".";

        } else if (inputLength === 11) {

            cpf.value += "-";

        }
    }
});

const validaCPF = (cpf) => {

    cpf = cpf.replace(/\D/g, "")

    console.log

    if(cpf.length !== 11){
        console.clear()
        console.error("Campo cpf não foi preenchido corretamente.")
        return
    }

    const proximoDigitoVerificador = (cpfIncompleto) => {
        
        let somatoria = 0

        for (let index = 0; index < cpfIncompleto.length; index++) {

            let digitoAtual = cpfIncompleto.charAt(index)

            let constante = (cpfIncompleto.length + 1 - index)

            somatoria += Number(digitoAtual) * constante

        }

        const resto = somatoria % 11
        return resto < 2 ? "0" : (11 - resto).toString()
    }

    let primeiroDigitoVerificador = proximoDigitoVerificador(cpf.substring(0, 9))
    let segundoDigitoVerificador = proximoDigitoVerificador(cpf.substring(0, 9) + primeiroDigitoVerificador)
    
    let cpfCorreto = cpf.substring(0, 9) + primeiroDigitoVerificador + segundoDigitoVerificador

    if(cpf !== cpfCorreto) {
        console.log("CPF inválido")
        return false
    }

    console.log("CPF Válido")
    return true

}
