const express = require('express');
const path = require('path');
const localizacao = require('./utils/localizacao');
const previsao = require('./utils/previsao');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, 'utils')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/pagode', (req, res) => {
    //console.log(req.query.nomeLocal);
    if(!req.query.nomeLocal){
        return res.send('Erro, nenhuma localização foi inserida!');
    }
    localizacao(req.query.nomeLocal, (erro, {latitude, longitude, local} = {}) => {
        if(erro){
            return res.send({erro});
        }
        //return res.send({latitude, longitude, local});
        previsao(latitude, longitude, (erro, dadosPrevisao) => {
            if(erro){
                return res.send({erro});
            }
            return res.send({
                previsao: dadosPrevisao,
                local: local,
                termoPesquisado: req.query.nomeLocal
            })
        });
    });
});

app.get('/extra', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/extra.html'));
});

const server = app.listen(9000, () => {
    console.log(`Express rodando → PORTA ${server.address().port}`);
});

// const localizacao = require("./utils/localizacao.js");

// if(process.argv[2] === undefined){
//     console.log('Nenhuma localização foi inserida!');
// }else{
//     localizacao(process.argv[2]);
// }

