const form = document.querySelector("#form");
const cpf = document.querySelector("#Box1");
const senha = document.querySelector("#Box2");
const acessarContaBtn = document.querySelector("#acessarConta");

acessarContaBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (cpf.value === "" || !isCpfValid(cpf.value)) {
        alert("Preencha seu CPF");
        return;
    }

    if (senha.value === "" || !isSenhaValid(senha.value)) {
        alert("Preencha sua Senha");
        return;
    }

    window.location.href = "home.html"; 
});

function isCpfValid(cpf) {
    const cpfRegex = new RegExp(
        /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    );

    return cpfRegex.test(cpf);
}

function isSenhaValid(senha) {
    const senhaRegex = new RegExp(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
    );

    return senhaRegex.test(senha);
}
