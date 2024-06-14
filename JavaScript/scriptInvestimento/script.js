const areaDivsApi = document.querySelector("#areaDivsApi")

window.onload = ()=>{
    buscarDados()
}

function buscarDados(){
    let url = "https://brapi.dev/api/quote/list?limit=100&token=jCwqXxVNK97bbGxSXjfm8v";
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onload = () => {

        let resposta = request.response;
        resposta = JSON.parse(resposta)
        console.log(resposta.stocks);
        
        for (let index = 0; index < resposta.stocks.length; index++) {
           
           if (resposta.stocks[index].logo !== "https://brapi.dev/favicon.svg") {

           let divImgAcao = document.createElement('div')
           let divAcao = document.createElement('div')
           let imgAcao = document.createElement('img') 
           let nameAcao = document.createElement('p')
           let botao = document.createElement('button')
           botao.textContent = "investir"
           botao.className = "botaoInvestir"
           areaDivsApi.appendChild(divAcao)
           divAcao.appendChild(divImgAcao)
           divImgAcao.appendChild(imgAcao)
           divImgAcao.appendChild(nameAcao)
           divImgAcao.appendChild(botao)
           
           
           divAcao.className = "divAcao"
           divImgAcao.className = "divImgAcao"
           imgAcao.src = resposta.stocks[index].logo
           nameAcao.textContent = resposta.stocks[index].name
           console.log(resposta.stocks[index])

        }        
        }
    }

}