const resultado = document.getElementById("resultado");

const formulario = document.querySelector('#formulario');
const nomeBusca = document.querySelector('#textoLocal');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    resultado.textContent = 'Carregando Requisição. Por Favor Aguarde';
    const nome = nomeBusca.value;
    console.log(nome);
    fetch('http://localhost:9000/busca?nomeLocal=' + nome).then((resposta) => {
    console.log(resposta);
    resposta.json().then((dados) => {
        if(dados.erro){
            resultado.innerText = dados.erro;
        }else{
            console.log(dados);
            resultado.innerText = dados.local + '\n' + dados.previsao;
        }
    });
 });
});

// fetch('http://localhost:9000/pagode?nomeLocal=umuarama').then((resposta) => {
//     resposta.json().then((dados) => {
//         console.log(dados);
//         texto1.innerText = dados.previsao;
//         texto2.innerText = dados.local;
//     });
// });