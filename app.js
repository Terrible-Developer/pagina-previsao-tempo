const localizacao = require("./utils/localizacao.js");

if(process.argv[2] === undefined){
    console.log('Nenhuma localização foi inserida!');
}else{
    localizacao(process.argv[2]);
}

