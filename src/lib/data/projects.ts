import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { base } from '$app/paths';

export const items: Array<Project> = [
	{
		slug: 'shiny-agency',
		color: '#5e95e3',
		description:
			'This project was completed as part of the React course from OpenCkassrooms. The goal of this project was to build the web page of a freelance agency, using React, Create React App, React Router, Styled Components and Jest.',
		descriptionFr:
			"Ce projet a été réalisé dans le cadre du cours sur React créé et diffusé par OpenClassrooms. L'objectif de ce projet était de développer la page web d'une agence freelance, en utilisant React, Create React App, React Router, Styled Components et Jest.",
		shortDescription: 'Creation of the web page of a freelance agency, using React.',
		shortDescriptionFr: "Création de la page web d'une agence freelance, en utilisant React.",
		links: [
			{ to: 'https://github.com/GwenDumoulin/shiny-agency', label: 'GitHub' },
			{ to: 'https://www.foxidees.com/shiny-agency/', label: 'Website' }
		],
		logo: Assets.ReactJs,
		name: 'Shiny Agency',
		period: {
			from: new Date(2024, 4, 25),
			to: new Date(2024, 5, 8)
		},
		skills: getSkills('js', 'reactjs', 'jest', 'styled-components'),
		type: 'Website',
		screenshots: [
			{
				label: 'Home page',
				src: `${base}/shiny.png`
			},
			{
				label: 'Profiles page',
				src: `${base}/shiny2.png`
			},
			{
				label: 'Test page',
				src: `${base}/shiny3.png`
			},
			{
				label: 'Results page',
				src: `${base}/shiny4.png`
			},
			{
				label: 'Profile page',
				src: `${base}/shiny5.png`
			}
		]
	},
	{
		slug: 'kasa',
		color: '#5e95e3',
		description:
			'Kasa is a web application that I developed as part of my training on React. Based on a provided mockup, I completed the integration and development of this apartment rental platform using React and Next.js. I also used TailwindCSS for styling management and TypeScript. This project allowed me to gain a better understanding of the key concepts of Next.js and TypeScript, as well as to enhance my front-end development skills.',
		descriptionFr:
			"Kasa est une application web que j'ai développée dans le cadre de ma formation sur React. À partir d'une maquette fournie, j'ai réalisé l'intégration et le développement de cette plateforme de location d'appartements en utilisant React et Next.js. J'ai également utilisé TailwindCSS pour la gestion des styles et TypeScript. Ce projet m'a permis de mieux comprendre les concepts clés de Next.js et TypeScript, ainsi que de développer mes compétences en développement front-end.",
		shortDescription:
			'Integration and development of an apartment rental platform using React and Next.js.',
		shortDescriptionFr:
			"Intégration et développement d'une plateforme de location d'appartements, construite avec React et Next.js.",
		links: [
			{ to: 'https://github.com/GwenDumoulin/kasa', label: 'GitHub' },
			{ to: 'https://www.foxidees.com/kasa/', label: 'Website' }
		],
		logo: Assets.next,
		name: 'Kasa',
		period: {
			from: new Date(2024, 5, 9),
			to: new Date(2024, 6, 0)
		},
		skills: getSkills('reactjs', 'ts', 'tailwind', 'next'),
		type: 'Website',
		screenshots: [
			{
				label: 'Home page',
				src: `${base}/kasa.png`
			},
			{
				label: 'About page',
				src: `${base}/kasa2.png`
			},
			{
				label: 'Apartment page',
				src: `${base}/kasa3.png`
			}
		]
	},
	{
		slug: 'portfolio-next',
		color: '#5e95e3',
		description:
			'Crafted with a focus on responsiveness and functionality, my portfolio allows me to showcase personal information, resume, projects, and contact details. Leveraging the power of Next.js for dynamic routing and SEO optimization, this portfolio rank high on search engines. It was created with a technology stack including React, Next.js, MarkDown, HTML/CSS/JS and Tailwind CSS.<br>I also added a functionality to translate it in French.',
		descriptionFr:
			"Conçu avec un accent sur la réactivité et la fonctionnalité, mon portfolio me permet de présenter des informations personnelles, mon CV, mes projets et mes coordonnées. En tirant parti de la puissance de Next.js pour le routage dynamique et l'optimisation SEO, ce portfolio est bien référencé sur les moteurs de recherche. Il a été créé avec une stack technologique comprenant React, Next.js, MarkDown, HTML/CSS/JS et Tailwind CSS.<br>J'ai aussi ajouté une fonctionalité pour traduire le site en Français.",
		shortDescription: 'A portfolio made with Next.js.',
		shortDescriptionFr: 'Un portfolio fait avec Next.js.',
		links: [
			{ to: 'https://github.com/GwenDumoulin/portfolio', label: 'GitHub' },
			{ to: 'https://www.foxidees.com/portfolio/', label: 'Website' }
		],
		logo: Assets.next,
		name: 'Portfolio Next',
		period: {
			from: new Date(2024, 8, 11),
			to: new Date(2024, 8, 18)
		},
		skills: getSkills('reactjs', 'next', 'tailwind', 'js'),
		type: 'Website',
		screenshots: [
			{
				label: 'Home page',
				src: `${base}/portfolio.png`
			},
			{
				label: 'About page',
				src: `${base}/portfolio2.png`
			},
			{
				label: 'Projects page',
				src: `${base}/portfolio3.png`
			},
			{
				label: 'Contact page',
				src: `${base}/portfolio4.png`
			}
		]
	},
	{
		slug: 'portfolio-svelte',
		color: '#ff3e00',
		description: 'A portfolio made with Typescript, SvelteKit, Tailwind CSS and Sass.',
		descriptionFr: 'Un portfolio fait avec Typescript, SvelteKit, Tailwind CSS et Sass.',
		shortDescription: 'A portfolio made with Typescript and SvelteKit.',
		shortDescriptionFr: 'Un portfolio fait avec Typescript et SvelteKit.',
		links: [
			{ to: 'https://github.com/GwenDumoulin/portfolio-svelte', label: 'GitHub' },
			{ to: 'https://www.foxidees.com/portfolio-svelte/', label: 'Website' }
		],
		logo: Assets.Svelte,
		name: 'Portfolio Svelte',
		period: {
			from: new Date(2024, 9, 11),
			to: new Date(2024, 9, 18)
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const titleEn = 'Projects';
export const titleFr = 'Projets';
