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
    <h2 class={getTypography('u2','h2')}>Aprovecha nuestras ofertas para viajar a <span class={getTypography('u2','h2', 'text-secondary')} >{destination}</span> </h2> 

    <p class={getTypography('body-large','body')}>Compra hasta el <span class={getTypography('body-large','body-emphasis','text-primary font-bold')} >{bookLimitDate} </span>del {bookLimitYear}. </p>
    
    <p class={getTypography('body-large','body')}>Para viajar hasta el <span class={getTypography('body-large','body-emphasis','text-primary font-bold')}>{flyLimitDate}</span> del {flyLimitYear}. </p> 
</div>