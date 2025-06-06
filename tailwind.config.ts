import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [require('cmds-tailwind-styles')],

	theme: {
		extend: {}
	},

	plugins: [typography]
} satisfies Config;
