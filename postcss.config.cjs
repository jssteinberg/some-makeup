const postcssPresetEnv = require('postcss-preset-env');

const config = {
	plugins: [postcssPresetEnv({
		features: {
			"case-insensitive-attributes": false,
			"custom-properties": false,
			"logical-properties-and-values": { dir: "ltr" },
			"oklab-function": { preserve: true },
		},
	})]
};

module.exports = config;
