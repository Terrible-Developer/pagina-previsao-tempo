const request = require("request");

const localizacao = (nomeLocal, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(nomeLocal) + '.json?access_token=pk.eyJ1IjoidmJwdTk4IiwiYSI6ImNrNWZ2NzhidTAxY2gzbm9uc3N4MTY5cDIifQ.D4ucUZ1lZdIhItnpv7lF5Q&language=pt&limit=1'
    request({url: url, json:true}, (erro, resposta) => {
        if(erro){
            callback('Não foi possível completar a conexão ao serviço de mapeamento!', undefined);
        }else if(resposta.body.message){
            console.log('Houve um problema com a chave de acesso, favor reportar este erro!', undefined);
        }else if(resposta.body.features[0] === undefined){
            callback('Localização inválida!', undefined);
        }else{
            callback(undefined, resposta);
        }
    });
}

const previsao = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8afd22df6e787faf82a9a8cee6a15b62/' + latitude + ', ' + longitude + '?lang=pt&units=si'
    request({url: url, json: true}, (erro, resposta) => {
        if(erro){
            callback('Não foi possível completar a conexão ao serviço de previsão!', undefined);
        }else if(resposta.body.error){
            callback('Localização não encontrada', undefined)
        }else{
            callback(undefined, resposta); 
        }
    });
}

const gerarDados = (nomeLocal) => {
    localizacao(nomeLocal, (erro, dados) => {
        if(erro){
            console.log(erro);
        }
        else if(dados){
            console.log(`Cidade: ${dados.body.features[0].place_name} ` + 
            `Latitude: ${dados.body.features[0].geometry.coordinates[1]} ` +
            `Longitude: ${dados.body.features[0].geometry.coordinates[0]} `);
            previsao(dados.body.features[0].geometry.coordinates[1], dados.body.features[0].geometry.coordinates[0], (erro, dados) => {
                if(erro){
                    console.log(erro);
                }
                else if(dados){
                    console.log(`${dados.body.daily.data[0].summary} A temperatura atual é de: ${dados.body.currently.temperature}°C. A possibilidade de chuva é de: ${dados.body.currently.precipProbability}%`);
                }
            });
        }
    });
}

module.exports = gerarDados;
