<script lang="ts">
	import { getTypography } from '$lib/components/foundations/typography';

	let {
		cardTitle,
		cardDescription,
		cardImageID,
		cardImageAlt
	}: {
		cardTitle: string;
		cardDescription: string;
		cardImageID: string;
		cardImageAlt: string;
	} = $props();
</script>

<div class="row-span-2 grid grid-rows-subgrid overflow-hidden rounded-2xl border border-gray-300">
	<div class="aspect-h-9 aspect-[16/8]">
		<img
			class="h-full w-full object-cover"
			src="https://cm-marketing.directus.app/assets/{cardImageID}"
			alt={cardImageAlt}
		/>
	</div>
	<div class="m-8 flex flex-col gap-4">
		<h3 class={getTypography('caption', 'h3', '!text-primary')}>{cardTitle}</h3>
		<p class={getTypography('body', 'body')}>{cardDescription}</p>
	</div>
</div>
