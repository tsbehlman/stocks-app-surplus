module.exports = {
	mode: "development",
	entry: "./src/main.js",
	devtool: "cheap-source-map",
	externals: {
		"surplus": "Surplus",
		"s-js": "S",
		"s-array": "SArray"
	},
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