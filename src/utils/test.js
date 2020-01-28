const localizacao = require('./localizacao');
const previsao = require('./previsao');

const teste = localizacao(process.argv[2], (erro, {latitude, longitude, local}) => {
    if(erro){
        return erro;
    }
    // let resposta = `Cidade: ${dados.body.features[0].place_name} ` + 
    //     `Latitude: ${dados.body.features[0].geometry.coordinates[1]} ` +
    //     `Longitude: ${dados.body.features[0].geometry.coordinates[0]} `;
    previsao(latitude, longitude, (erro, dadosPrevisao) => {
        if(erro){
            return erro;
        }
        console.log(dadosPrevisao + ' ' + local);
        // console.log(`Cidade: ${dados.body.features[0].place_name} ` + 
        // `Latitude: ${dados.body.features[0].geometry.coordinates[1]} ` +
        // `Longitude: ${dados.body.features[0].geometry.coordinates[0]} `);
        // console.log(`${dadosPrevisao.body.daily.data[0].summary} A temperatura atual é de: ${dadosPrevisao.body.currently.temperature}°C.` +
        //                 `A probabilidade de chuva é de: ${dadosPrevisao.body.currently.precipProbability}%`);
    });
});

console.log(teste);