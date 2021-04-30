const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), //arquivo de saída
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'] //para reconhecer os formatos dos arquivos desejados
    },
    plugins: [
        new HtmlWebpackPlugin({ //cria um arquivo script que carrega o bundle.js dentro do html para não precisar fazer isso manualmente
            template: path.resolve(__dirname, 'public', 'index.html') 
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/, //identificar que o arquivo deve ter o final .jsx para ser executado de forma correta
                exclude: /node_modules/, //deixar de fora todos os arquivos da node_modules porque os criadores das dependências que nela reside já fizeram os ajustes necessários
                use: 'babel-loader' //converter webpack para o babel, dessa forma o navegador vai reconhecer os códigos
            }
        ]
    }
}