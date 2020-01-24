const fLocal = require('./localizacao');

fLocal.localizacao(process.argv[2], (erro, dados) => {
    if(erro){
        return console.log(erro);
    }
    // let resposta = `Cidade: ${dados.body.features[0].place_name} ` + 
    //     `Latitude: ${dados.body.features[0].geometry.coordinates[1]} ` +
    //     `Longitude: ${dados.body.features[0].geometry.coordinates[0]} `;
    fLocal.previsao(dados.body.features[0].geometry.coordinates[1], dados.body.features[0].geometry.coordinates[0], (erro, dadosPrevisao) => {
        if(erro){
            return console.log(erro);
        }
        console.log(`Cidade: ${dados.body.features[0].place_name} ` + 
        `Latitude: ${dados.body.features[0].geometry.coordinates[1]} ` +
        `Longitude: ${dados.body.features[0].geometry.coordinates[0]} `);
        console.log(`${dadosPrevisao.body.daily.data[0].summary} A temperatura atual é de: ${dadosPrevisao.body.currently.temperature}°C.` +
                                `A probabilidade de chuva é de: ${dadosPrevisao.body.currently.precipProbability}%`);
    });
});