const request = require('request');

const localizacao = (nomeLocal, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(nomeLocal) + '.json?access_token=pk.eyJ1IjoidmJwdTk4IiwiYSI6ImNrNWZ2NzhidTAxY2gzbm9uc3N4MTY5cDIifQ.D4ucUZ1lZdIhItnpv7lF5Q&language=pt&limit=1'
    request({url: url, json:true}, (erro, {body}) => {
        if(erro){
            callback('Não foi possível completar a conexão ao serviço de mapeamento!', undefined);
        }else if(body.message){
            callback('Houve um problema com a chave de acesso, favor reportar este erro!', undefined);
        }else if(body.features[0] === undefined){
            callback('Localização inválida!', undefined);
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                local: body.features[0].place_name
            });
        }
    });
}

module.exports = localizacao;