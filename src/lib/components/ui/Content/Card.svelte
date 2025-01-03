
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


<div class="grid row-span-2 grid-rows-subgrid border border-gray-300 rounded-2xl ">
    <img class="rounded-t-2xl h-[398px] "
            src="https://cm-marketing.directus.app/assets/{cardImageID}?width=1419&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ"
            alt="{cardImageAlt}" />
    <div class="m-8 flex flex-col gap-4">
        <h3 class={getTypography('display','h3','text-primary')} >{cardTitle}</h3>
        <p class={getTypography('body','body')} >{cardDescription}</p>
    </div>
</div>