const autoprefixer = require('autoprefixer');

const mode = process.env.NODE_ENV;

const config = {
	plugins: [
		autoprefixer
	]
};

module.exports = config;
