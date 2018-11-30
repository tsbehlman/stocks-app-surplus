module.exports = {
	mode: "development",
	entry: "./src/main.js",
	devtool: "cheap-source-map",
	output: {
		filename: "main.js"
	},
	resolve: {
		extensions: [ ".js" ]
	},
	module: {
		rules: [
			{ test: /\.jsx$/, loader: "surplus-loader" },
		]
	}
};