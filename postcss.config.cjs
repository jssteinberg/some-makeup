const postcssPresetEnv = require('postcss-preset-env');

const config = {
	plugins: [postcssPresetEnv({
		// stage: false,
		features: {
			"postcss-attribute-case-insensitive": false,
			"logical-properties-and-values": { dir: "ltr" },
			"oklab-function": { subFeatures: { displayP3: false } },
		},
	})]
};

module.exports = config;
