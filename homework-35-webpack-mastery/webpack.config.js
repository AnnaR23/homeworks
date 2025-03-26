const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';


const plugins = [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.png'),
          to: path.resolve(__dirname, 'dist'),
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].min.css'
    }),
  new EslintWebpackPlugin({
    extensions: ['js'], // Визначаємо розширення файлів для перевірки
    fix: true, // Вмикаємо автоматичне виправлення помилок
    configType: 'eslintrc'
  })
  ];


const modules = {
  rules: [
    {
      test: /\.css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        'css-loader'
      ]
    },
    {
      test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
      type: 'asset/resource'
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
    },
    {
      test: /\.js$/, // Відповідає усім .js файлам
      exclude: /node_modules/, // Виключає папку node_modules
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'] // Використовує preset-env для транспіляції сучасного JS
        }
      }
    },
    {
      test: /\.ts$/, // Вказуємо, що файл з розширенням .ts повинен бути оброблений
      exclude: /node_modules/, // Виключаємо директорію node_modules з обробки
      use: {
        loader: 'babel-loader', // Використовуємо babel-loader для компіляції
        options: {
          presets: [
            '@babel/preset-env', // Перетворення ES6+ у сумісний код JavaScript
            '@babel/preset-typescript' // Додавання підтримки TypeScript
          ]
        }
      }
    }
  ]
};

module.exports = {
  entry: {
    main: './src/index.js',
    stat: './src/statistics.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].bundle.[contenthash].js' : '[name].js',
  },
  devServer: {
    port: 4200,
    hot: false
  },
  plugins,
  module: modules,
  optimization: {
    splitChunks: {
      chunks: 'all', // Оптимізація загального коду для всіх типів чанків
    },
    minimizer: [
      new TerserPlugin() // Мінімізація JS файлів
    ]
  }
};



