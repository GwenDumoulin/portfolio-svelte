<script>
	import { data, dataFrench, titleEn, titleFr } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { language } from '$lib/stores/language';
</script>

<CommonPage title={$language === 'fr' ? titleFr : titleEn}>
	<div class="resume">
		{#if data}
			<a href={data} download>
				<Chip size={'1.25em'}>Download English Resume</Chip>
			</a>
		{:else}
			<Chip>Ooops! no resume at the moment.</Chip>
		{/if}
	</div>
	<div class="resume">
		{#if dataFrench}
			<a href={dataFrench} download>
				<Chip size={'1.25em'}>Download French Resume</Chip>
			</a>
		{:else}
			<Chip>Ooops! no French resume at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
