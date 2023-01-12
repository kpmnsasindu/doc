const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		publicPath: 'http://localhost:3001/',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
	},
	devServer: {
		port: 3001,
		historyApiFallback: true,
		compress: true,
		hot: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'docubinet_maintenance',
			filename: 'remoteEntry.js',
			exposes: {
				'./MaintenanceApp': './src/bootstrap',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
