import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, ContractTypeFrench, type LanguagesExperience } from '../types';
import { base } from '$app/paths';

export const experiences: LanguagesExperience = {
	en: [
		{
			slug: 'projects',
			company: 'Home',
			description: `Creating various projects for my portfolio, and learning new frameworks. See <a href="${base}/projects">my projects</a>`,
			contract: ContractType.SelfEmployed,
			type: 'Frontend Developer',
			location: 'Paris',
			period: { from: new Date(2024, 5, 1), to: new Date() },
			skills: getSkills(
				'html',
				'css',
				'js',
				'jquery',
				'reactjs',
				'ts',
				'jest',
				'next',
				'svelte',
				'tailwind',
				'sass'
			),
			name: 'Portfolio creation',
			color: 'yellow',
			links: [],
			logo: Assets.ReactJs,
			shortDescription: 'Creating various projects for my portfolio, and learning new frameworks'
		},
		{
			slug: 'abtasty',
			company: 'AB Tasty',
			description: `<li>Development of complex client campaigns (HTML / CSS / JS / JQuery)</li>
					<li>Conducting technical feasibility studies</li>
					<li>React / TypeScript / Jest development</li>
					<li>Daily use of Git</li>
					<li>Management and supervision of the international development team (Communication via Slack)</li>
					<li>Weekly presentations of new features in English</li>
					<li>Defining team goals and evaluating progress</li>
					<li>Identifying potential training areas and implementing a technical training plan</li>
					<li>Drafting job descriptions and conducting recruitment interviews</li>`,
			contract: ContractType.FullTime,
			type: 'Frontend Developer',
			location: 'Paris',
			period: { from: new Date(2021, 2, 1), to: new Date(2023, 6, 0) },
			skills: getSkills('html', 'css', 'js', 'jquery', 'reactjs', 'ts', 'jest'),
			name: 'Frontend Developer / Team Leader',
			color: 'red',
			links: [],
			logo: Assets.abtasty,
			shortDescription: 'Became Team Leader in 6 months.'
		},
		{
			slug: 'maxiweb',
			company: 'Maxiweb',
			description: `<li>Managing and leading the development team</li>
			<li>Creating innovative tools</li>
			<li>Managing the production of various launched projects</li>
			<li>Integrating email templates and landing pages while ensuring compatibility across ISPs and browsers (HTML / CSS)</li>
			<li>Implementing and securing GDPR-compliant forms (JavaScript, JQuery, PHP, and MySQL)</li>
			<li>Connecting forms to clients' CRMs (via API)</li>
			<li>Handling technical requests from clients</li>
			<li>Resolving various technical issues</li>
			<li>Configuring the tracking interface</li>
			<li>Conducting technological watch</li>`,
			contract: ContractType.FullTime,
			type: 'Web Developer',
			location: 'Paris',
			period: { from: new Date(2018, 6, 1), to: new Date(2020, 6, 0) },
			skills: getSkills('html', 'css', 'js', 'jquery', 'php', 'mysql'),
			name: 'Web Developer / Team Leader',
			color: 'blue',
			links: [],
			logo: Assets.maxiweb,
			shortDescription:
				'I was Maxiweb only developer for a while and became Team Leader after a year.'
		},
		{
			slug: 'chemistry',
			company: 'various',
			description: 'Various experiences in the field of chemistry (material analysis, etc.)',
			contract: ContractType.FullTime,
			type: 'Chemistry',
			location: 'Paris',
			period: { from: new Date(2012, 0, 2), to: new Date(2018, 0, 0) },
			skills: getSkills(),
			name: 'Chemical Technician',
			color: 'green',
			links: [],
			logo: Assets.Unknown,
			shortDescription: 'Chemistry experiences.'
		}
	],
	fr: [
		{
			slug: 'projects',
			company: 'Personnel',
			description: `Création de divers projets pour mon portfolio, et apprentissage de nouveaux frameworks. Voir <a href="${base}/projects">mes projets</a>`,
			contract: ContractTypeFrench.SelfEmployed,
			type: 'Développeur Frontend',
			location: 'Paris',
			period: { from: new Date(2024, 5, 1), to: new Date() },
			skills: getSkills(
				'html',
				'css',
				'js',
				'jquery',
				'reactjs',
				'ts',
				'jest',
				'next',
				'svelte',
				'tailwind',
				'sass'
			),
			name: 'Création de portfolio',
			color: 'yellow',
			links: [],
			logo: Assets.ReactJs,
			shortDescription:
				'Création de divers projets pour mon portfolio, et apprentissage de nouveaux frameworks'
		},
		{
			slug: 'abtasty',
			company: 'AB Tasty',
			description: `<li>Développement de campagnes client complexes (HTML / CSS / JS / JQuery)</li>
				<li>Réalisation d'études de faisabilité technique</li>
				<li>Développement avec React / TypeScript / Jest</li>
				<li>Utilisation quotidienne de Git</li>
				<li>Gestion et supervision de l'équipe de développement international (Communication via Slack)</li>
				<li>Présentation des nouveautés hebdomadaires en anglais</li>
				<li>Définition des objectifs d'équipe et évaluation des progrès</li>
				<li>Identification des besoins en formation et mise en place d'un plan de formation technique</li>
				<li>Rédaction des fiches de poste et conduite d'entretiens de recrutement</li>`,
			contract: ContractTypeFrench.FullTime,
			type: 'Développeur Frontend',
			location: 'Paris',
			period: { from: new Date(2021, 2, 1), to: new Date(2023, 6, 0) },
			skills: getSkills('html', 'css', 'js', 'jquery', 'reactjs', 'ts', 'jest'),
			name: 'Développeuse Frontend / Team Leader',
			color: 'red',
			links: [],
			logo: Assets.abtasty,
			shortDescription: 'Devenue Team Leader au bout de 6 mois.'
		},
		{
			slug: 'maxiweb',
			company: 'Maxiweb',
			description: `<li>Gestion et encadrement de l'équipe de développement</li>
				<li>Création d'outils innovants</li>
				<li>Gestion de la production des projets lancés</li>
				<li>Intégration des emails et landing pages publicitaires dans le respect des contraintes techniques et d'affichages selon les différents FAI et navigateurs (HTML / CSS)</li>
				<li>Animation et sécurisation des formulaires dans le respect du RGPD (Javascript, JQuery, PHP et MySQL)</li>
				<li>Connexion des formulaires aux CRM des clients (via API)</li>
				<li>Gestion des demandes techniques des clients</li>
				<li>Résolution de divers problèmes techniques</li>
				<li>Paramétrage de l'interface de tracking</li>
				<li>Veille technologique</li>`,
			contract: ContractTypeFrench.FullTime,
			type: 'Développeur Web',
			location: 'Paris',
			period: { from: new Date(2018, 6, 1), to: new Date(2020, 6, 0) },
			skills: getSkills('html', 'css', 'js', 'jquery', 'php', 'mysql'),
			name: 'Développeuse Web / Team Leader',
			color: 'blue',
			links: [],
			logo: Assets.maxiweb,
			shortDescription:
				"Seul développeuse de Maxiweb pendant un moment, puis devenu Team Leader au bout d'un an."
		},
		{
			slug: 'chemistry',
			company: 'Divers',
			description: 'Diverses expériences dans le domaine de la chimie (analyse de matériaux, etc.)',
			contract: ContractTypeFrench.FullTime,
			type: 'Chimie',
			location: 'Paris',
			period: { from: new Date(2012, 0, 2), to: new Date(2018, 0, 0) },
			skills: getSkills(),
			name: 'Technicienne chimiste',
			color: 'green',
			links: [],
			logo: Assets.Unknown,
			shortDescription: 'Expériences en chimie.'
		}
	]
};

export const titleExp = {
	en: 'Experience',
	fr: 'Expérience'
};
