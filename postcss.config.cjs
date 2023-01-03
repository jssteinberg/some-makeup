const postcssPresetEnv = require('postcss-preset-env');

const config = {
	plugins: [postcssPresetEnv({
		stage: 3,
		minimumVendorImplementations: 1, // number of browser that has implemented the feature
		features: {
			"logical-properties-and-values": true,
		},
	})]
};

module.exports = config;
