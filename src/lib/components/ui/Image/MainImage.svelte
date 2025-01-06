<script lang="ts">
    let { mainImageID } : { mainImageID:string } = $props();
</script>


<div class="container mx-auto">
    <picture class=" block  mx-auto sm:aspect-[16_/ lg:aspect-[16_/_8] py-6 ">
        <source media="(min-width: 1367px)" srcset="https://cm-marketing.directus.app/assets/{mainImageID}" sizes="">
        <source media="(min-width: 960px)" srcset="https://cm-marketing.directus.app/assets/{mainImageID}" sizes="">
        <source media="(min-width: 600px)" srcset="https://cm-marketing.directus.app/assets/{mainImageID}" sizes="">
        <img src="https://cm-marketing.directus.app/assets/{mainImageID}" alt="" class="w-full h-full object-cover rounded-2xl drop-shadow-lg">
    </picture>
</div>