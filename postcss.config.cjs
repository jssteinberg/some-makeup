const postcssPresetEnv = require('postcss-preset-env');

const config = {
	plugins: [postcssPresetEnv({
		features: {
			"case-insensitive-attributes": false,
			"custom-properties": false,
			"logical-properties-and-values": { dir: "ltr" },
			// "oklab-function": { subFeatures: { displayP3: false } },
		},
	})]
};

module.exports = config;
