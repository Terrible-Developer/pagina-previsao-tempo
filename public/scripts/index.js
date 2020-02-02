const resultado = document.getElementById("resultado");

const formulario = document.querySelector('#formulario');
const nomeBusca = document.querySelector('#textoLocal');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    resultado.textContent = 'Carregando Requisição. Por Favor Aguarde';
    const nome = nomeBusca.value;
    fetch('/busca?nomeLocal=' + nome).then((resposta) => {
    resposta.json().then((dados) => {
        if(dados.erro){
            resultado.innerText = dados.erro;
        }else{
            resultado.innerText = dados.local + '\n' + dados.previsao;
        }
    });
 });
});
