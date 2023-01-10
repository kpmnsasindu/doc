const HtmlWebpackPlugin = require('html-webpack-plugin');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
	module: {
		rules: [
			{
				test: /\.m?js/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.json$/i,
				type: 'json',
			},
			{
				test: /\.svg$/i,
				type: 'asset/inline',
			},
			{
				resourceQuery: /raw/,
				type: 'asset/source',
			},
			{
				test: /\.txt$/i,
				type: 'asset/source',
				parser: {
					dataUrlCondition: {
						maxSize: 4 * 1024,
					},
				},
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader'],
			},
			{
				test: /\.xml$/i,
				use: ['xml-loader'],
			},
			{
				test: /\.toml$/i,
				type: 'json',
				parser: {
					parse: toml.parse,
				},
			},
			{
				test: /\.yaml$/i,
				type: 'json',
				parser: {
					parse: yaml.parse,
				},
			},
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse,
				},
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
