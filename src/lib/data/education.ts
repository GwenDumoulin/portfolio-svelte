import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Junior Web Developer Certificate',
		description: '',
		location: 'France',
		logo: Assets.OC,
		name: '',
		organization: 'OpenClassrooms',
		period: { from: new Date(2018, 0, 1), to: new Date(2018, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['HTML', 'CSS', 'Javascript', 'PHP', 'Wordpress']
	},
	{
		degree: "Bachelor's Degree in Chemistry",
		description: '',
		location: 'France',
		logo: Assets.UPSUD,
		name: '',
		organization: 'Paris-Sud 11 University',
		period: { from: new Date(2008, 8, 1), to: new Date(2011, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['English', 'Chemistry', 'Algorithm']
	}
];

export const title = 'Education';
