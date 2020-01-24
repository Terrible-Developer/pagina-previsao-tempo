//const gerarDados = require('../../../utils/localizacao');
import {GerarDados} from '../../../utils/localizacaoBR';

var botao = document.getElementById("botao");
var texto = document.getElementById("entrada").innerText;

botao.onclick = () => {
    console.log(GerarDados(texto));
}