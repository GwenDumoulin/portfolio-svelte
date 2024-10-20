import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import type { Item, Skill } from '$lib/types';

dayjs.extend(duration);

export const countMonths = (from: Date, to: Date = new Date()): number => {
	let firstYear = 0;
	let wholeYears = 0;
	let newYear = 0;

	if (to.getFullYear() !== from.getFullYear()) {
		newYear = to.getMonth();
		wholeYears = (to.getFullYear() - from.getFullYear() - 1) * 12;
		firstYear = 12 - from.getMonth();
	} else {
		firstYear = to.getMonth() - from.getMonth();
	}

	return firstYear + wholeYears + newYear + 1;
};

export const getMonthName = (index: number, language: string): string => {
	const monthNames = {
		en: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		],
		fr: [
			'Janvier',
			'Février',
			'Mars',
			'Avril',
			'Mai',
			'Juin',
			'Juillet',
			'Août',
			'Septembre',
			'Octobre',
			'Novembre',
			'Decembre'
		]
	};
	let monthname = language === 'fr' ? monthNames.fr : monthNames.en;

	return monthname[index];
};

export const useImage = (url: string, base: string): string => `${base}${url}`;

export const useTitle = (title: string, suffix: string) => `${title} | ${suffix}`;

export function getTimeDiff(
	date1: Date,
	date2 = new Date(Date.now() + 1000 * 60 * 60 * 24),
	language: string
) {
	const d1 = dayjs(date1);
	const d2 = dayjs(date2);

	const duration = dayjs.duration(d2.diff(d1));

	let n = 0;
	let u = 'day';

	if (duration.as('days') <= 7) {
		u = language === 'fr' ? 'jour' : 'day';
		n = duration.as('days');
	} else if (duration.as('months') <= 1) {
		u = language === 'fr' ? 'semaine' : 'week';
		n = duration.as('weeks');
	} else if (duration.as('years') <= 1) {
		u = language === 'fr' ? 'mois' : 'month';
		n = duration.as('months');
	} else {
		u = language === 'fr' ? 'année' : 'year';
		n = duration.as('years');
	}

	n = Math.trunc(n);

	return `${Math.trunc(n)} ${u}${n > 1 && u != 'mois' ? 's' : ''}`;
}

export type ItemOrSkill = Item | Skill;

export function filterItemsByQuery<T extends ItemOrSkill>(
	items: Array<T>,
	query: string
): Array<T> {
	const ignoredProperties = ['logo', 'links', 'color', 'screenshots'];
	query = query.toLowerCase();

	return items.filter((item) => doesQueryExistInItemOrAttributes(item, query, ignoredProperties));
}

function doesQueryExistInItemOrAttributes(
	item: any,
	query: string,
	ignoredProperties: string[] = []
): boolean {
	if (Array.isArray(item)) {
		return item.some((subItem) => doesQueryExistInItemOrAttributes(subItem, query));
	} else if (typeof item === 'object' && item !== null) {
		if (item instanceof Date) {
			const dateFormats = [
				item?.toString().toLowerCase(), // Full date string
				item.toLocaleDateString('default', { month: 'long', year: 'numeric' }).toLowerCase(), // "January 2023"
				item
					.toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric' })
					.toLowerCase(), // "15 January 2023"
				item.toLocaleDateString('en-US').toLowerCase(), // "1/15/2023"
				item
					.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
					.toLowerCase() // "Jan 15, 2023"
			];
			return dateFormats.some((dateStr) => dateStr.includes(query));
		} else {
			return Object.keys(item).some(
				(key) =>
					!ignoredProperties.includes(key) && doesQueryExistInItemOrAttributes(item[key], query)
			);
		}
	} else {
		return item?.toString().toLowerCase().includes(query);
	}
}

const DAY = 24 * 60 * 60 * 1000;
const WEEK = 7 * 24 * 60 * 60 * 1000;
const MONTH = 30 * 24 * 60 * 60 * 1000;
const YEAR = 365 * 24 * 60 * 60 * 1000;

export function computeExactDuration(from: Date, to: Date = new Date(), language: string): string {
	const fromMs = from.getTime();
	const toMs = to.getTime();

	const display: Array<string> = [];

	let remaining = toMs - fromMs;

	const years = remaining / YEAR;

	if (years >= 1) {
		remaining = remaining % YEAR;
		language === 'fr'
			? display.push(`${Math.trunc(years)} an${years >= 2 ? 's' : ''}`)
			: display.push(`${Math.trunc(years)} year${years >= 2 ? 's' : ''}`);
	}

	const months = remaining / MONTH;
	if (months >= 1) {
		remaining = remaining % MONTH;
		language === 'fr'
			? display.push(`${Math.trunc(months)} mois`)
			: display.push(`${Math.trunc(months)} month${months >= 2 ? 's' : ''}`);
	}

	const weeks = remaining / WEEK;
	if (weeks >= 1) {
		remaining = remaining % WEEK;
		language === 'fr'
			? display.push(`${Math.trunc(weeks)} semaine${weeks >= 2 ? 's' : ''}`)
			: display.push(`${Math.trunc(weeks)} week${weeks >= 2 ? 's' : ''}`);
	}

	const days = remaining / DAY;
	if (days >= 1) {
		remaining = remaining % DAY;
		language === 'fr'
			? display.push(`${Math.trunc(days)} jour${days >= 2 ? 's' : ''}`)
			: display.push(`${Math.trunc(days)} day${days >= 2 ? 's' : ''}`);
	}

	if (display.length === 0) {
		let returnValue = language === 'fr' ? '1 jour' : '1 day';
		return returnValue;
	}

	return display
		.map((it, index) => {
			if (display.length === 1 || index === display.length - 1) return it;

			if (index === display.length - 2) {
				let returnValue = language === 'fr' ? `${it} et` : `${it} and`;
				return returnValue;
			}

			return `${it},`;
		})
		.join(' ');
}
