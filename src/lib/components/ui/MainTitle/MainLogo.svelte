<script lang="ts">
    let { dLogoID } : { dLogoID:string } = $props();
</script>


  <picture class="left-1/4  col-start-2 col-end-2 row-start-3 row-end-3">
        
    <source media="(min-width: 958px)" 
            srcset="https://cm-marketing.directus.app/assets/{dLogoID}" 
            class="w-full  " />
    <img alt="" 
         src="https://cm-marketing.directus.app/assets/{dLogoID}" 
         class="xs:w-full sm:w-3/4 md:w-1/2 lg:w-[48%]" 
        />
</picture>
