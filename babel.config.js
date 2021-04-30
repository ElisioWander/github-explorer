module.exports = {
    presets: [
        "@babel/preset-env", //identificar qual plataforma que a aplicação irá funcionar e, apartir disso, trabalha de forma adequada
        ["@babel/preset-react", { //para que o babel reconhece o react.js
            runtime: 'automatic' //possibilita o uso do react sem precisar chama-lo no arquivo
        }]
    ]
}