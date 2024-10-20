import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Gwenaëlle';

export const lastName = 'Dumoulin';

export const description = 'JavaScript | TypeScript | React | Next.js';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/GwenDumoulin' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/gwenaelle-dumoulin/'
	},
	{
		platform: Platform.Email,
		link: 'gwen.dumoulin@gmail.com'
	}
];

export const skills = getSkills(
	'js',
	'css',
	'html',
	'reactjs',
	'svelte',
	'ts',
	'jquery',
	'php',
	'tailwind',
	'vuejs',
	'jest',
	'mysql'
);
