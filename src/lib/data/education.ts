import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Junior Web Developer Certificate',
		degreeFr: 'Certificat Développeur Web Junior',
		description: '',
		location: 'France',
		logo: Assets.OC,
		name: '',
		organization: 'OpenClassrooms',
		organizationFr: 'OpenClassrooms',
		period: { from: new Date(2018, 0, 1), to: new Date(2018, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['HTML', 'CSS', 'Javascript', 'PHP', 'Wordpress'],
		subjectsFr: ['HTML', 'CSS', 'Javascript', 'PHP', 'Wordpress']
	},
	{
		degree: "Bachelor's Degree in Chemistry",
		degreeFr: 'Licence de Chimie',
		description: '',
		location: 'France',
		logo: Assets.UPSUD,
		name: '',
		organization: 'Paris-Sud 11 University',
		organizationFr: 'Université Paris-Sud 11',
		period: { from: new Date(2008, 8, 1), to: new Date(2011, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['English', 'Chemistry', 'Algorithm'],
		subjectsFr: ['Anglais', 'Chimie', 'Algorithmes']
	}
];

export const title = 'Education';
