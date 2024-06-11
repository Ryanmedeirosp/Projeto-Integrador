const containerAcoes = document.querySelector("#containerAcoes")
const containerBDRs = document.querySelector("#containerBDRs")

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
           containerAcoes.appendChild(divAcao)
           divAcao.appendChild(divImgAcao)
           divImgAcao.appendChild(nameAcao)
           divImgAcao.appendChild(imgAcao)
           
           
           divAcao.className = "divAcao"
           imgAcao.src = resposta.stocks[index].logo
           nameAcao.textContent = resposta.stocks[index].name
           console.log(resposta.stocks[index])

        }        
        }
    }

    let url2 = "https://brapi.dev/api/quote/list?limit=100&type=bdr&token=jCwqXxVNK97bbGxSXjfm8v";
    let request2 = new XMLHttpRequest();
    request2.open("GET", url2);
    request2.send();
    request2.onload = () => {
        let resposta2 = request2.response;
        resposta2 = JSON.parse(resposta2)
        console.log(resposta2.stocks);
        
        for (let index = 0; index < resposta2.stocks.length; index++) {
           
           if (resposta2.stocks[index].logo !== "https://brapi.dev/favicon.svg") {

           let divImgAcao = document.createElement('div')
           let divAcao = document.createElement('div')
           let imgAcao = document.createElement('img') 
           let nameAcao = document.createElement('p')
           containerBDRs.appendChild(divAcao)
           divAcao.appendChild(divImgAcao)
           divImgAcao.appendChild(nameAcao)
           divImgAcao.appendChild(imgAcao)
           
           
           divAcao.className = "divAcao"
           imgAcao.src = resposta2.stocks[index].logo
           nameAcao.textContent = resposta2.stocks[index].name
           console.log(resposta2.stocks[index])

        }
           
           
                 
        }

 
    }
}
