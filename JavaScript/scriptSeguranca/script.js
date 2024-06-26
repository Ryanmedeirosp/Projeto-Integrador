const form = document.querySelector("#form");
const antigasenha = document.querySelector("#Box1");
const novasenha = document.querySelector("#Box2");
const confsenha = document.querySelector("#Box2");
const confirmarBtn = document.querySelector("#confirmar");

confirmarBtn.addEventListener("click", (event) =>{
    event.preventDefault();

    if (antigasenha.value === "" || !isantigasenhaValid(antigasenha.value)) {
        alert("Coloque sua senha atual");
        return;
    }
    
    if (novasenha.value === "" || !isnovasenhaValid(novasenha.value)) {
        alert("Coloque sua nova senha");
        return;
    }
  
    if (confsenha.value !== novasenha.value || !isconfsenhaValid(confsenha.value)) {
        alert("Confirme sua nova senha corretamente");
        return;
    }
});

function isantigasenhaValid(antigasenha) {
    const antigasenhaRegex = new RegExp(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
    );

    return antigasenhaRegex.test(antigasenha);
}

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
