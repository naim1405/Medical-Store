/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#0F0F0F",
					secondary: "#f6d860",
					accent: "#004FE8",
					neutral: "#004FE8",
					"base-100": "#ffffff",
				},
			},

			"light",
		],
	},
};
