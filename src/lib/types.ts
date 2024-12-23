import type { Color } from './utils/colors';

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
}

export type Icon = `i-${string}-${string}`;

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export enum ContractTypeFrench {
	FullTime = 'Temps plein',
	PartTime = 'Teamps partiel',
	SelfEmployed = 'Indépendant',
	Freelance = 'Freelance',
	Contract = 'Contrat',
	Internship = 'Stage'
}

export type Asset = string | { light: string; dark: string };

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	nameFr?: string;
	logo: Asset;
	shortDescription: string;
	shortDescriptionFr?: string;
	description: string;
	descriptionFr?: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface SkillCategory<S extends string = string> {
	slug: S;
	name: {
		en: string;
		fr: string;
	};
}

export interface Skill<S extends string = string>
	extends Omit<Item<S>, 'shortDescription' | 'shortDescriptionFr'> {
	color: string;
	category?: SkillCategory;
}

export interface Project<S extends string = string> extends Item<S> {
	links: Array<Link>;
	color: Color;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill<S>>;
}

export interface Experience<S extends string = string> extends Project<S> {
	company: string;
	location: string;
	contract: ContractType | ContractTypeFrench;
}
export interface LanguagesExperience<S extends string = string> {
	en: Array<Experience<S>>;
	fr: Array<Experience<S>>;
}

export interface Education<S extends string = string> extends Item<S> {
	organization: string;
	organizationFr?: string;
	location: string;
	period: {
		from: Date;
		to?: Date;
	};
	subjects: Array<string>;
	subjectsFr?: Array<string>;
	degree: string;
	degreeFr?: string;
}
