const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production' //definindo variável de ambiente

module.exports = {
    mode: isDevelopment ? 'development' : 'production', //ambiente de produção ou desenvolvimento
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //configurando a forma que o erro aparece no console do navegador e também o ambiente que será utilizado
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), //arquivo de saída
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'] //para reconhecer os formatos dos arquivos desejados
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), //permite fazer alterações no projeto sem precisar reiniciar o webpack atravez do terminal todas as vezes
        hot: true
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({ //cria um arquivo script que carrega o bundle.js dentro do html para não precisar fazer isso manualmente
            template: path.resolve(__dirname, 'public', 'index.html') 
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.jsx$/, //identificar que o arquivo deve ter o final .jsx para ser executado de forma correta
                exclude: /node_modules/, //deixar de fora todos os arquivos da node_modules porque os criadores das dependências que nela reside já fizeram os ajustes necessários
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                } //converter webpack para o babel, dessa forma o navegador vai reconhecer os códigos
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'] //loader do webpack para que o css seja convertido de uma forma que o navegador entenda
            }
        ]
    }
}