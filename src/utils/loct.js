



const GerarDados = (nomeLocal) => {
    localizacao(nomeLocal, (erro, dados) => {
        if(erro){
            return '1';
        }
        let dadosLocal = `Cidade: ${dados.body.features[0].place_name} ` + 
        `Latitude: ${dados.body.features[0].geometry.coordinates[1]} ` +
        `Longitude: ${dados.body.features[0].geometry.coordinates[0]} `;
        previsao(dados.body.features[0].geometry.coordinates[1], dados.body.features[0].geometry.coordinates[0], (erro, dadosP) => {
            if(erro){
                return '2';
            }
            let dadosPrevisao = `\n${dadosP.body.daily.data[0].summary} A temperatura atual é de: ${dadosP.body.currently.temperature}°C.` +
                                `A probabilidade de chuva é de: ${dadosP.body.currently.precipProbability}%`;
            return '5';
        });
    });
}

module.exports = {
    localizacao: localizacao,
    previsao: previsao
};