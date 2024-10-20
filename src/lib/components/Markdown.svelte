<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let container: HTMLDivElement;

	export let content: string;

	async function updateContent(content: string) {
		const sanitizer = createSanitizer(window);
		try {
			const parsed = await marked.parse(content);
			container.innerHTML = sanitizer.sanitize(parsed);
			Prism.highlightAllUnder(container);
		} catch (error) {
			console.error("Erreur lors de l'analyse du contenu : ", error);
		}
	}

	if (browser) {
		onMount(() => {
			marked.use(gfmHeadingId());
			marked.use(mangle());
			updateContent(content);
		});
	}

	$: {
		if (browser) updateContent(content);
	}
</script>

<div bind:this={container} class="markdown-container" />
