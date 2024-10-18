import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'projects',
		company: 'Home',
		description: `Creating various projects for my portfolio, and learning new frameworks. See <a href="/projects">my projects</a>`,
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
];

export const title = 'Experience';
