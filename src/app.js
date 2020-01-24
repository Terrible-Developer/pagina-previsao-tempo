const express = require('express');
const path = require('path');
const local = require('./utils/localizacao');

const app = express();

app.use(express.static(path.join(__dirname, 'views/public/css')));
app.use(express.static(path.join(__dirname, 'views/public/scripts')));
app.use(express.static(path.join(__dirname, 'src/utils')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/pagode', (req, res) => {
    console.log(req.query.nomeLocal);

    local.localizacao(req.query.nomeLocal, (erro, {latitude, longitude, location}) => {
        if(erro){
            return res.send({erro});
        }
        return res.send({latitude, longitude, location});
    });
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

