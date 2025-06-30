<script lang="ts">
	import { getTypography } from '$lib/components/foundations/typography';

	let {
		introTitle,
		introDescription,
		introBookURL,
		introBookCTA
	}: {
		introTitle: string;
		introDescription: string;
		introBookURL: string;
		introBookCTA: string;
	} = $props();
</script>

<div class="container m-auto justify-items-center">
	<div class="my-4">
		<h2 class={getTypography('u2', 'h2')}>{introTitle}</h2>

		<p class={getTypography('body-large', 'body')}>{introDescription}</p>
		<a href={introBookURL}>
			{#if introBookURL}
				<button
					class={getTypography(
						'body',
						'body',
						'col-start-2 col-end-2 row-start-3 row-end-3 flex max-h-[5rem] min-w-[4.563rem] items-center justify-center gap-1 rounded-[2.5rem] border border-primary bg-primary px-4 py-[0.625rem] text-center text-d1 text-common-white outline-2 outline-offset-4 outline-primary *:max-h-5 hover:bg-primary-ultradark focus:bg-primary-ultradark focus:outline active:bg-primary active:outline disabled:cursor-not-allowed disabled:bg-grey-100 disabled:text-grey-500 disabled:outline-0'
					)}>{introBookCTA}</button
				>
			{/if}
		</a>
	</div>
</div>
