import { experiences } from '@data/experience';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const experienceFr = experiences['fr'].find((item) => item.slug === params.slug);
		const experienceEn = experiences['en'].find((item) => item.slug === params.slug);

		return { experienceFr, experienceEn };
	}

	return {
		status: 404,
		error: new Error('Experience not found')
	};
}
