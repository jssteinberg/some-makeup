const postcssPresetEnv = require('postcss-preset-env');

const config = {
	plugins: [postcssPresetEnv({
		// stage: false,
		features: {
			"logical-properties-and-values": { dir: "ltr" },
		},
	})]
};

module.exports = config;
