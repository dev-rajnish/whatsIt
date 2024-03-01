module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{html,js,png,json,css}'
	],
	swDest: 'public/pwa/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};