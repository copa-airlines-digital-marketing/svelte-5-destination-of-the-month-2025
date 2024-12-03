<script lang="ts">
    	import { getTypography } from "$lib/components/foundations/typography";

    let { 
        introTitle, 
        introDescription, 
        introBookURL,
        introBookCTA 
    } : {
             introTitle:string, 
             introDescription:string,
             introBookURL:string,
             introBookCTA:string  } = $props();
</script>



<div class="container justify-items-center m-auto">
    <div class="my-4">
   
        <h2 class={getTypography('u2','h2')}>{introTitle}</h2> 
    
        <p class={getTypography('body-large','body')}>{introDescription}</p>
        <a href="{introBookURL}"> 
        
            <button class={getTypography('body','body','min-w-[4.563rem] max-h-[5rem] flex items-center justify-center text-center outline-offset-4 outline-2 border active:outline focus:outline disabled:cursor-not-allowed disabled:outline-0 px-4 py-[0.625rem] rounded-[2.5rem] gap-1 text-d1 *:max-h-5 bg-primary text-common-white outline-primary border-primary hover:bg-primary-ultradark active:bg-primary focus:bg-primary-ultradark disabled:text-grey-500 disabled:bg-grey-100 col-start-2 col-end-2 row-start-3 row-end-3')}>{introBookCTA}</button>
        
        </a>
    </div>
</div>