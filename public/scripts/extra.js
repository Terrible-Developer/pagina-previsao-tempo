const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");

fetch('http://localhost:9000/pagode?nomeLocal=umuarama').then((resposta) => {
    resposta.json().then((dados) => {
        console.log(dados);
        texto1.innerText = dados.previsao;
        texto2.innerText = dados.local;
    });
});