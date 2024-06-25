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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (telefone.value === "" || !isTelefoneValid(telefone.value)) {
        alert("Preencha seu Telefone");
        return;
    }

    if (email.value === "" || !isEmailValid(email.value)) {
        alert("Preencha seu Email");
        return;
    }
});

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );

    return emailRegex.test(email);
}

function isTelefoneValid(telefone) {
    const telefoneRegex = new RegExp(
        /^\([1-9]{2}\) 9[0-9]{4}\-[0-9]{4}$/
    );

    return telefoneRegex.test(telefone);
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
    input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
}

nomeCompleto.addEventListener("input",(e)=>{
    validarLetras(nomeCompleto)
})

botao.addEventListener("click", (event) => {
   
    if (nomeCompleto.value =="") {
        nomeCompleto.style.border = " 3px solid red"
        nomeCompleto.placeholder = "Preencha seu nome"
    }

    if (cpf.value == "") {
        cpf.style.border = " 3px solid red"
        cpf.placeholder = "Preencha seu CPF"
        
    }

    if (dataNascimento.value == "") {
        dataNascimento.style.border = " 3px solid red"
    }

    if (email.value == "")  {    
        email.style.border = " 3px solid red"
        email.placeholder = "Preencha seu email"
        
    }

    if (telefone.value == "") {
        telefone.style.border = " 3px solid red"
        telefone.placeholder = "Preencha seu telefone"     
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

    const senhaValue = senha.value;
    const confirmarSenhaValue = confirmarSenha.value;

    const senhaRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if (!senhaRegex.test(senhaValue)) {
        console.log('A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caracter especial.')
    }else if (senhaValue !== confirmarSenhaValue) {
        console.log('As senhas não correspondem.');
    } else{
        console.log('Senha válida!');
    }

    console.log(validaCPF(cpf.value))
});

cpf.addEventListener("input", (event) => {
    let currentValue = cpf.value;
    let formattedValue = currentValue.replace(/[^0-9]/g, '');

    if (event.inputType === "deleteContentBackward") {
        formattedValue = formattedValue.slice(0, -1);
    }

    let newValue = '';
    for (let i = 0; i < formattedValue.length; i++) {
        if (i === 3 || i === 6) {
            newValue += '.';
        }
        if (i === 9) {
            newValue += '-';
        }
        newValue += formattedValue[i];
    }

    cpf.value = newValue;
});

const validaCPF = (cpf) => {

    cpf = cpf.replace(/\D/g, "")

    if(cpf.length !== 11){
        console.error("Campo CPF não foi preenchido corretamente.")
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
