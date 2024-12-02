<script>
	import { getTypography } from "$lib/components/foundations/typography";
    const breadcrumbItems = [
    { title: 'Inicio', href: 'https://www.copaair.com/es/vuelos' },
    { title: 'Promociones', href: 'https://www.copaair.com/es/vuelos-promociones' },
 
  ];

</script>

<div class="w-full bg-primary grid grid-rows-[48px_auto_auto_48px] gap-y-3 container-grid ">
    <div class="col-start-2 col-end-2 row-start-2 row-end-2">  
        <nav aria-label="Breadcrumb ">
            <ol class="flex gap-2 items-center">
              {#each breadcrumbItems as item, index}
                <li class="">
                  <a href={item.href} class={getTypography('body','link', 'text-gray-50')}>{item.title}</a>
                </li>
                {#if index < breadcrumbItems.length - 1}
                  <li class={getTypography('body','link', 'text-gray-50')} >&rsaquo;</li>
                {/if}
              {/each}
              <li class={getTypography('body','link', 'text-gray-50')} >&rsaquo;</li>
            </ol>
          </nav>
       
    </div>
    <picture class="left-1/4  col-start-2 col-end-2 row-start-3 row-end-3  ">
        
        <source media="(min-width: 958px)" 
                srcset="https://cm-marketing.directus.app/assets/ea042fff-a592-431f-976f-4533a8f769ba?format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ" 
                class="w-full  " />
        <img alt="" 
             src="https://cm-marketing.directus.app/assets/ea042fff-a592-431f-976f-4533a8f769ba?format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ" 
             class="xs:w-full sm:w-3/4 md:w-1/2 lg:w-[48%]" 
            />
    </picture>
</div>
<div class="container mx-auto">
    <picture class=" block  mx-auto sm:aspect-[16_/_8] md:aspect-[16_/_8] lg:aspect-[16_/_8] py-6 ">
        <source media="(min-width: 1367px)" srcset="https://cm-marketing.directus.app/assets/269ea88d-85a0-423a-b115-9aa3c5310e9f?width=1367&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ" sizes="">
        <source media="(min-width: 960px)" srcset="https://cm-marketing.directus.app/assets/269ea88d-85a0-423a-b115-9aa3c5310e9f?width=1367&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ" sizes="">
        <source media="(min-width: 600px)" srcset="https://cm-marketing.directus.app/assets/269ea88d-85a0-423a-b115-9aa3c5310e9f?width=1367&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ" sizes="">
        <img src="https://cm-marketing.directus.app/assets/269ea88d-85a0-423a-b115-9aa3c5310e9f?width=1000&height=900&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ" alt="" class="w-full h-full object-cover rounded-2xl drop-shadow-lg">
    </picture>
</div>
<div class="container justify-items-center m-auto">
    <div class="my-4">
   
        <h2 class={getTypography('u2','h2')}>Conoce el espectáculo de San Juan</h2> 
    
        <p class={getTypography('body-large','body')}>Este vibrante destino en Puerto Rico es una mezcla perfecta de playas paradisíacas, aventuras y una vida nocturna llena de energía. Aquí encontrarás el escenario ideal para disfrutar del sol, la adrenalina, y el encanto boricua, en una isla que invita a explorar y disfrutar cada rincón.</p>
        <a href="https://www.copaair.com"> 
        
            <button class={getTypography('body','body','min-w-[4.563rem] max-h-[5rem] flex items-center justify-center text-center outline-offset-4 outline-2 border active:outline focus:outline disabled:cursor-not-allowed disabled:outline-0 px-4 py-[0.625rem] rounded-[2.5rem] gap-1 text-d1 *:max-h-5 bg-primary text-common-white outline-primary border-primary hover:bg-primary-ultradark active:bg-primary focus:bg-primary-ultradark disabled:text-grey-500 disabled:bg-grey-100 col-start-2 col-end-2 row-start-3 row-end-3')}>Reserva ya
            </button>
        
        </a>
    </div>
</div>

<div class="container mx-auto py-8   ">
    <div class="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 auto-rows-auto gap-6 pt-6  ">
        <div class="grid row-span-2 grid-rows-subgrid border border-gray-300 rounded-2xl ">
            <img class="rounded-t-2xl"
                    src="https://cm-marketing.directus.app/assets/77bb0b7f-7a1a-4d59-9ca8-dd48567f2c5c?width=1419&height=875&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ"
                    alt="Museo de Ciencias Naturales de Carolina del Norte en Raleigh" />
        
            <div class="m-8 flex flex-col gap-4">
                <h3 class={getTypography('display','h3','text-primary')} >Conseguir un bronceado perfecto</h3>
                <p class={getTypography('body','body')} >Para disfrutar completamente del sol, Puerto Rico ofrece el escenario perfecto, con algunas de las playas más lindas del Caribe. Ya sea en el barrio de Condado, en la misma San Juan, o en las islas Vieques y Culebra, alejadas de la ciudad, las playas boricuas son hermosas, con sus aguas color turquesa y delicada arena blanca.</p>
            </div>
        </div>
     
        <div class="grid row-span-2 grid-rows-subgrid border border-gray-300 rounded-2xl ">
            <img class="rounded-t-2xl"
                    src="https://cm-marketing.directus.app/assets/a3f1fae5-9454-4899-a1b2-a83f73a73952?width=1419&height=875&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ"
                    alt="Gastronomía de Raleigh" />
        
            <div class="m-8 flex flex-col gap-4">
                <h3 class={getTypography('display','h3','text-primary')} >Persigue la adrenalina</h3>
                <p class={getTypography('body','body')} >La isla es ideal para los amantes de la aventura. El paracaidismo, kitesurf y el buceo con tanque son algunas de las actividades más extremas, y senderismo, canopy y paddleboard, de las más tranquilas. También, da un paseo en kayak nocturno en La Parguera, en el municipio de las Lajas, una de las tres bahías bioluminiscentes de Puerto Rico.</p>
            </div>
        </div>
        <div class="grid row-span-2 grid-rows-subgrid border border-gray-300 rounded-2xl ">
            <img class="rounded-t-2xl"
                    src="https://cm-marketing.directus.app/assets/c82ea8c1-031f-4479-bf28-976793a43cfe?width=1419&height=875&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ"
                    alt="Jardines Sarah P. Duke en Durham" />
        
            <div class="m-8 flex flex-col gap-4">
                <h3 class={getTypography('display','h3','text-primary')} >Baila hasta el amanecer</h3>
                <p class={getTypography('body','body')} >Uno de los mayores atractivos de este destino es su pasión por la música y la alegre vida nocturna. El epicentro en San Juan se encuentra en la Placita de Santurce, un antiguo mercado lleno de edificios históricos, donde podrá encontrar varios restaurantes; y que de noche se convierte en un escenario para bailar y cantar todo lo que las energías aguanten.</p>
            </div>
        </div>
        <div class="grid row-span-2 grid-rows-subgrid border border-gray-300 rounded-2xl ">
            <img class="rounded-t-2xl"
                    src="https://cm-marketing.directus.app/assets/d91b0cca-019c-4728-a33e-0b7127b34bbb?width=1419&height=875&format=auto&access_token=2NYgIiKkCP6FNY4Jj31_h4d5VKkSSVbZ"
                    alt="Parque Estatal Eno River en Durham" />
        
            <div class="m-8 flex flex-col gap-4">
                <h3 class={getTypography('display','h3','text-primary')} >Saborear la cocina boricua</h3>
                <p class={getTypography('body','body')}>La gastronomía puertorriqueña es otro tesoro que debes descubrir en San Juan. Los sabores de la isla, que combinan influencias africanas, españolas y taínas, se pueden degustar en cada esquina. Desde las frituras tradicionales como alcapurrias y bacalaítos, hasta los platos principales como el mofongo y el lechón asado, San Juan es un paraíso para los amantes de la buena comida.</p>
            </div>
        </div>
    
    </div>
  </div>



<div class="container mx-auto text-center py-5">
    <h2 class={getTypography('u2','h2')}>Aprovecha nuestras ofertas para viajar a <span class={getTypography('u2','h2', 'text-secondary')} >San Juan</span> </h2> 

    <p class={getTypography('body-large','body')}>Compre hasta el <span class={getTypography('body-large','body-emphasis','text-primary font-bold')} >30 de noviembre</span> del 2024. </p>
    
    <p class={getTypography('body-large','body')}>Para viajar hasta el <span class={getTypography('body-large','body-emphasis','text-primary font-bold')}>31 de mayo</span> del 2025. </p> 
</div>
