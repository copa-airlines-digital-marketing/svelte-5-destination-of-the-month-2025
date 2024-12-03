<script lang="ts">
    let { mainImageID } : { mainImageID:string } = $props();
</script>


<div class="container mx-auto">
    <picture class=" block  mx-auto sm:aspect-[16_/_8] md:aspect-[16_/_8] lg:aspect-[16_/_8] py-6 ">
        <source media="(min-width: 1367px)" srcset="https://cm-marketing.directus.app/assets/{mainImageID}?width=1367&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ" sizes="">
        <source media="(min-width: 960px)" srcset="https://cm-marketing.directus.app/assets/{mainImageID}?width=1367&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ" sizes="">
        <source media="(min-width: 600px)" srcset="https://cm-marketing.directus.app/assets/{mainImageID}?width=1367&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ" sizes="">
        <img src="https://cm-marketing.directus.app/assets/{mainImageID}?width=1000&height=900&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ" alt="" class="w-full h-full object-cover rounded-2xl drop-shadow-lg">
    </picture>
</div>