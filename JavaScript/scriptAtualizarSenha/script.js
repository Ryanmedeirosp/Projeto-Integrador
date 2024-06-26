const form = document.querySelector("#form");
const novasenha = document.querySelector("#Box1");
const confsenha = document.querySelector("#Box2");
const confirmarBtn = document.querySelector("#confirmar");

confirmarBtn.addEventListener("click", (event) =>{
    event.preventDefault();

    if (novasenha.value === "" || !isnovasenhaValid(novasenha.value)) {
        novasenha.style.border = " 3px solid red"
        novasenha.placeholder = "Coloque sua nova senha"
        return;
    }
  
    if (confsenha.value !== novasenha.value || !isconfsenhaValid(confsenha.value)) {
        confsenha.style.border = " 3px solid red"
        confsenha.placeholder = "Confirme sua nova senha corretamente"
        return;
    }

    window.location.href = "login.html";
});

function isnovasenhaValid(novasenha) {
    const novasenhaRegex = new RegExp(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
    );

    return novasenhaRegex.test(novasenha);
}

function isconfsenhaValid(confsenha) {
    const confsenhaRegex = new RegExp(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
    );

    return confsenhaRegex.test(confsenha);
}
