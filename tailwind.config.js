module.exports = {
	purge: {
		enabled: true,
		content: ["*.html"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				effra: ["Effra"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
