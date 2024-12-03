<script lang=ts>
        import { getTypography } from "$lib/components/foundations/typography";
        let { 
    destination, 
    bookLimitDate,
    bookLimitYear,
    flyLimitDate,
    flyLimitYear
     
} : {
    destination:string,  
    bookLimitDate:string,
    bookLimitYear:string,  
    flyLimitDate:string, 
    flyLimitYear:string
      } = $props();
</script>



<div class="container mx-auto text-center py-5">
    <h2 class={getTypography('u2','h2')}>Take advantage of our offers to travel to <span class={getTypography('u2','h2', 'text-secondary')} >{destination}</span> </h2> 

    <p class={getTypography('body-large','body')}>Book until <span class={getTypography('body-large','body-emphasis','text-primary font-bold')} >{bookLimitDate} </span>, {bookLimitYear}. </p>
    
    <p class={getTypography('body-large','body')}>And travel until <span class={getTypography('body-large','body-emphasis','text-primary font-bold')}>{flyLimitDate}</span>, {flyLimitYear}. </p> 
</div>