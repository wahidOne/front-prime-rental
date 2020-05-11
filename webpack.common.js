module.exports = {
	entry: {
		main: './src/index.js',
		vendor: './src/vendors.js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
						plugins: ['transform-class-properties'],
					},
				},
			},
			{ test: /\.hbs$/, loader: 'handlebars-loader' },
		],
	},
};
