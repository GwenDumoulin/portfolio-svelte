import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const key = '@gd-language';

export const language = writable<'en' | 'fr'>('en'); // Utilisation de 'en' par défaut

const updateLocalStorage = (value: 'en' | 'fr') => {
	if (browser) {
		localStorage.setItem(key, value);
	}
};

// Bascule entre les langues
export const toggleLanguage = () =>
	language.update((currentLanguage) => {
		const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
		updateLocalStorage(newLanguage);
		return newLanguage;
	});

// Charger la langue depuis le localStorage au chargement de la page
export const onHydratedLanguage = () => {
	if (!browser) return;

	const storedLanguage = localStorage.getItem(key);
	if (storedLanguage) {
		language.set(storedLanguage as 'en' | 'fr');
	} else {
		// Détection de la langue du navigateur
		const defaultLanguage = navigator.language === 'fr-FR' ? 'fr' : 'en';
		language.set(defaultLanguage);
		updateLocalStorage(defaultLanguage);
	}
};
