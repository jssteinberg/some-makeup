// const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

const config = {
	// plugins: [autoprefixer]
	plugins: [postcssPresetEnv({
		stage: 3, // 4 is stable
		minimumVendorImplementations: 2 // number of browser that has implemented the feature
	})]
};

module.exports = config;
