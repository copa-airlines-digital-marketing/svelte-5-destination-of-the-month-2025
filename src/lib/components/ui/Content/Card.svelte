
<script lang="ts">
    import { getTypography } from "$lib/components/foundations/typography";

let { 
    cardTitle, 
    cardDescription, 
    cardImageID,
    cardImageAlt 
} : {
    cardTitle:string, 
    cardDescription:string, 
    cardImageID:string,
    cardImageAlt:string  } = $props();
</script>


<div class="grid row-span-2 grid-rows-subgrid border border-gray-300 rounded-2xl overflow-hidden">
    <div class="aspect-w-16 aspect-h-9">
        <img class="object-cover w-full h-full"
            src="https://cm-marketing.directus.app/assets/{cardImageID}"
            alt="{cardImageAlt}" />
    </div>
    <div class="m-8 flex flex-col gap-4">
        <h3 class={getTypography('display','h3','text-primary')} >{cardTitle}</h3>
        <p class={getTypography('body','body')} >{cardDescription}</p>
    </div>
</div>
