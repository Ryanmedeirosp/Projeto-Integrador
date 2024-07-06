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

    if (cpf.value.length < 11) {
        console.log("campo CPF não preenchido corretamente.")
        return
    }

    const senhaValue = senha.value;

    const senhaRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#¨])[A-Za-z\d@$!%*?&#¨]{8,}$/;
    if (!senhaRegex.test(senhaValue)) {
        console.log('Senha inválida.')
        return
    }else{
        console.log('Senha válida!');
    }

});


const invalidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
];

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

    if (invalidos.includes(cpf)) {
        console.log("CPF inválido")
        return false;
    }
    
    console.log("CPF Válido")
    return true
}