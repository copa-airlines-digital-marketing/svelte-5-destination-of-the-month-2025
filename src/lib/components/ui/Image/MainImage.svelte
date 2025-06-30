<script lang="ts">
	let { mainImageID }: { mainImageID: string } = $props();
</script>

<div class="container mx-auto">
	<picture
		class=" mx-auto block aspect-[8_/_8] py-6 sm:aspect-[16_/_8] md:aspect-[16_/_6] lg:aspect-[16_/_7]"
	>
		<source
			media="(min-width: 1367px)"
			srcset="https://cm-marketing.directus.app/assets/{mainImageID}"
			sizes=""
		/>
		<source
			media="(min-width: 960px)"
			srcset="https://cm-marketing.directus.app/assets/{mainImageID}"
			sizes=""
		/>
		<source
			media="(min-width: 600px)"
			srcset="https://cm-marketing.directus.app/assets/{mainImageID}"
			sizes=""
		/>
		<img
			src="https://cm-marketing.directus.app/assets/{mainImageID}"
			alt=""
			class="h-full w-full rounded-2xl object-cover drop-shadow-lg"
		/>
	</picture>
</div>
