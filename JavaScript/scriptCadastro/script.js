const nomeCompleto = document.querySelector("#Box1")
const cpf = document.querySelector("#Box2")
const dataNascimento = document.querySelector("#Box3")
const email = document.querySelector("#Box4")
const telefone = document.querySelector("#Box5")
const senha = document.querySelector("#Box6")
const confirmarSenha = document.querySelector("#Box7")
const botao = document.querySelector("#btn")



botao.addEventListener("click", (event) => {
    event.preventDefault()
    if ((nomeCompleto == null) && (cpf == null) && (dataNascimento == null) && (email == null) && (telefone == null) && (senha == null) && (confirmarSenha == null)) {
        alert("existem campos vázios")
    }
    if (cpf.value.length < 11) {
        alert("cpf incorreto")
    }
    console.log(validaCPF(cpf.value))
});

cpf.addEventListener("keypress", () => {
    let inputLength = cpf.value.length

    if (inputLength === 3 || inputLength === 7) {
        cpf.value += "."
    }else if(inputLength === 11) {
        cpf.value += "-"
    }
    // console.log(cpf.value)
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

            // console.log(somatoria)
        }

        const resto = somatoria % 11
        return resto < 2 ? "0" : (11 - resto).toString()
    }

    let primeiroDigitoVerificador = proximoDigitoVerificador(cpf.substring(0, 9))
    let segundoDigitoVerificador = proximoDigitoVerificador(cpf.substring(0, 9) + primeiroDigitoVerificador)
    
    let cpfCorreto = cpf.substring(0, 9) + primeiroDigitoVerificador + segundoDigitoVerificador

    if(cpf !== cpfCorreto) {
        return false
        console.log("CPF inválido")
    }

    console.log("CPF Válido")
    return true

}

