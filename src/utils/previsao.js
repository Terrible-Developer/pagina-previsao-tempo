const request = require('request');

const previsao = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8afd22df6e787faf82a9a8cee6a15b62/' + latitude + ', ' + longitude + '?lang=pt&units=si'
    request({url: url, json: true}, (erro, {body}) => {
        if(erro){
            callback('Não foi possível completar a conexão ao serviço de previsão!', undefined);
        }else if(body.error){
            callback('Localização não encontrada', undefined)
        }else{
            callback(undefined, `${body.daily.data[0].summary} A temperatura atual é de ${body.currently.temperature} C°,` + 
            `e a chance de chuva é de ${body.currently.precipProbability * 10}%`);
        }
    });
}

module.exports = previsao;