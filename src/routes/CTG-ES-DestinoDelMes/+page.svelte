<script>
	import { getTypography } from "$lib/components/foundations/typography";
    import * as MainHeader from "$lib/components/ui/MainTitle";
    import * as MainImage from "$lib/components/ui/Image";
    import * as MainIntro from "$lib/components/ui/Intro";
    import * as MainContent from "$lib/components/ui/Content";
	import * as FareIntro from "$lib/components/ui/ESFareIntro";
	</script>


<MainHeader.Root >
   <MainHeader.BreadcrumbsES></MainHeader.BreadcrumbsES>
   <MainHeader.MainLogo dLogoID='ea042fff-a592-431f-976f-4533a8f769ba'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="269ea88d-85a0-423a-b115-9aa3c5310e9f" ></MainImage.Root>

<MainIntro.Root 
introTitle="Descubre los Encantos de Punta Cana" 
introDescription="En un rincón del Caribe donde la naturaleza y la relajación convergen, existe un destino que promete desconexión total y momentos inolvidables. Bienvenido a Punta Cana, un paraíso donde cada amanecer sobre las aguas turquesas marca el inicio de un día lleno de aventuras, sabores y emociones. Este viaje no es solo una escapada, es una invitación a vivir el Caribe en su máxima expresión." 
introBookURL="https://www.google.com"
introBookCTA="Reserva ya"
></MainIntro.Root>

<MainContent.Root>
    <MainContent.Card
    cardTitle="Siente la Emoción del Catamarán y el Snorkel" 
    cardDescription="Embárcate en un paseo en catamarán y descubre la vida marina que habita en los arrecifes de coral de Punta Cana. Equipado con máscara y snorkel, sumérgete en un mundo submarino lleno de peces de colores y vibrantes corales. Ya sea que prefieras relajarte en cubierta con música y bebidas o explorar las aguas, esta experiencia combina aventura y serenidad." 
    cardImageID="c3e018a5-81b4-48b9-900f-3745af036869"
    cardImageAlt="Catamarán en Punta Cana" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Relájate en Macao: Un Paraíso Auténtico" 
    cardDescription="Si buscas un ambiente más natural y menos desarrollado, la playa de Macao es el lugar perfecto. Famosa por su belleza salvaje, esta playa ofrece olas ideales para practicar surf y un entorno más tranquilo para quienes desean escapar del bullicio turístico. Aquí puedes disfrutar de un almuerzo fresco en uno de los restaurantes locales frente al mar, probar pescado recién capturado y empaparte de la auténtica esencia caribeña rodeado de paisajes espectaculares." 
    cardImageID="adeb73d4-13de-4974-90ce-2954bdaf3502"
    cardImageAlt="Macao: Un Paraíso Auténtico" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Aventúrate en la Reserva Ecológica Ojos Indígenas" 
    cardDescription="Adéntrate en la naturaleza de Punta Cana con una visita a la Reserva Ecológica Ojos Indígenas. Este paraíso natural alberga una red de senderos que te conducen a doce lagunas de agua dulce, perfectas para un refrescante chapuzón. Rodeado de exuberante vegetación tropical, este lugar te conecta con la tranquilidad y la belleza de la biodiversidad local." 
    cardImageID="f9972e59-da30-4b89-bd7a-cbb90102f2cb"
    cardImageAlt="Reserva Ecológica Ojos Indígenas" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Disfruta de la Gastronomía Local" 
    cardDescription="Deja que tus sentidos exploren los sabores únicos de la cocina dominicana en uno de los exclusivos beach clubs de Punta Cana. Desde un mofongo tradicional hasta frescos mariscos preparados con un toque local, cada plato te contará una historia culinaria. Acompaña tu comida con una refrescante piña colada o un ron dominicano y disfruta de las vistas al mar mientras el sol se pone." 
    cardImageID="44fd2574-014f-4422-a435-c4b214856566"
    cardImageAlt="Gastronomía Local" 
    ></MainContent.Card>
</MainContent.Root>

<FareIntro.Root
destination="Punta Cana"
bookLimitDate="31 de diciembre" 
bookLimitYear="2024"
flyLimitDate="30 de abril"
flyLimitYear="2025"

></FareIntro.Root>



<div class="container mx-auto py-8 ">

<ol class="grid gap-3 justify-center" style="grid-template-columns: repeat(auto-fit, minmax(392px,392px));" >

<li class="custom-fares w-full max-w-[400px] h-full">
    <a class="grid overflow-hidden grid-cols-[8px_116px_auto_8px] grid-rows-[8px_auto_auto_8px] outline outline-1 rounded-2xl outline-grey-300 hover:outline-primary-ultralight focus:outline-2 hover:outline-2 focus:outline-primary-ultralight"  href="https://www.shopping.copaair.com/" role="button" data-oac="STI" data-dac="PTY" data-departure-date="2024-10-10" data-price="USD 383" data-return-date="2024-10-17" data-title="Santiago de los Caballeros a Panamá" data-sub="Itinerario: Ago 15, 2024 - Nov 30, 2024" data-promo-code="" data-site-edition="es" data-currency-code="USD">
            <img class="w-full h-full col-start-1 col-end-3 row-span-full object-cover" loading="lazy" src="https://www.copaair.com/promotions/airtrfx-lp/panama-increible/PTY-11-264x400.jpg " alt="Panamá" >
            <span class="mx-2 mb-2  col-start-3 col-end-3 row-start-2 row-end-2 flex flex-col gap-1">
                <span class={getTypography('caption','h4','flex flex-col font-gilroy text-primary h-auto ')}>
                    <span class="">Santiago de los Caballeros (STI) a</span>
                        <span class="">Comayagua, Tegucigalpa (XPL)</span>
                </span>
                <span class="flex h-auto items-center gap-2">
                    <img src="https://www.copaair.com/promotions/destinations/icons/calendar-icon.svg" class="h-[10.3px] w-[11.6px]" alt="date">
                    <span class={getTypography('body-small')} >
                        Ida y vuelta<br>Ago 15, 2024 - Nov 30, 2024
                    </span>
                </span>
            </span>
            <span class="mx-2 mt-2 col-start-3 col-end-3 row-start-3 row-end-3 ">
                <span class="flex flex-col items-end grid-rows-subgrid">
                    <span class={getTypography('body',undefined,'font-suisse  text-grey-600 line-through self-end')}>USD 287</span>
                
                            <span class="gap-y-2">
                                <span class={getTypography('body-small')}>desde <span class={getTypography('caption-tiny','h2', 'font-gilroy font-bold text-primary lg:text-u1 ')}>COP 1.000.249<sup>*</sup></span>
                            </span>
                </span>
                <span class={getTypography('body-small')}>Impuestos incluidos de COP 1.032.432 </span>
            </span>
    </a>
</li>

<li class="custom-fares w-full max-w-[400px] h-full">
    <a class="grid overflow-hidden grid-cols-[8px_116px_auto_8px] grid-rows-[8px_auto_auto_8px] outline outline-1 rounded-2xl outline-grey-300 hover:outline-primary-ultralight focus:outline-2 hover:outline-2 focus:outline-primary-ultralight"  href="https://www.shopping.copaair.com/" role="button" data-oac="STI" data-dac="PTY" data-departure-date="2024-10-10" data-price="USD 383" data-return-date="2024-10-17" data-title="Santiago de los Caballeros a Panamá" data-sub="Itinerario: Ago 15, 2024 - Nov 30, 2024" data-promo-code="" data-site-edition="es" data-currency-code="USD">
            <img class="w-full h-full col-start-1 col-end-3 row-span-full object-cover" loading="lazy" src="https://www.copaair.com/promotions/airtrfx-lp/panama-increible/PTY-11-264x400.jpg " alt="Panamá" >
            <span class="mx-2 mb-2  col-start-3 col-end-3 row-start-2 row-end-2 flex flex-col gap-1">
                <span class={getTypography('caption','h4','flex flex-col font-gilroy text-primary h-auto ')}>
                    <span class="">Santiago de los Caballeros (STI) a</span>
                        <span class="">Comayagua, Tegucigalpa (XPL)</span>
                </span>
                <span class="flex h-auto items-center gap-2">
                    <img src="https://www.copaair.com/promotions/destinations/icons/calendar-icon.svg" class="h-[10.3px] w-[11.6px]" alt="date">
                    <span class={getTypography('body-small')} >
                        Ida y vuelta<br>Ago 15, 2024 - Nov 30, 2024
                    </span>
                </span>
            </span>
            <span class="mx-2 mt-2 col-start-3 col-end-3 row-start-3 row-end-3 ">
                <span class="flex flex-col items-end grid-rows-subgrid">
                    <span class={getTypography('body',undefined,'font-suisse  text-grey-600 line-through self-end')}>USD 287</span>
                
                            <span class="gap-y-2">
                                <span class={getTypography('body-small')}>desde <span class={getTypography('caption-tiny','h2', 'font-gilroy font-bold text-primary lg:text-u1 ')}>COP 1.000.249<sup>*</sup></span>
                            </span>
                </span>
                <span class={getTypography('body-small')}>Impuestos incluidos de COP 1.032.432 </span>
            </span>
    </a>
</li>


<li class="custom-fares w-full max-w-[400px] h-full">
    <a class="grid overflow-hidden grid-cols-[8px_116px_auto_8px] grid-rows-[8px_auto_auto_8px] outline outline-1 rounded-2xl outline-grey-300 hover:outline-primary-ultralight focus:outline-2 hover:outline-2 focus:outline-primary-ultralight"  href="https://www.shopping.copaair.com/" role="button" data-oac="STI" data-dac="PTY" data-departure-date="2024-10-10" data-price="USD 383" data-return-date="2024-10-17" data-title="Santiago de los Caballeros a Panamá" data-sub="Itinerario: Ago 15, 2024 - Nov 30, 2024" data-promo-code="" data-site-edition="es" data-currency-code="USD">
            <img class="w-full h-full col-start-1 col-end-3 row-span-full object-cover" loading="lazy" src="https://www.copaair.com/promotions/airtrfx-lp/panama-increible/PTY-11-264x400.jpg " alt="Panamá" >
            <span class="mx-2 mb-2  col-start-3 col-end-3 row-start-2 row-end-2 flex flex-col gap-1">
                <span class={getTypography('caption','h4','flex flex-col font-gilroy text-primary h-auto ')}>
                    <span class="">Santiago de los Caballeros (STI) a</span>
                        <span class="">Comayagua, Tegucigalpa (XPL)</span>
                </span>
                <span class="flex h-auto items-center gap-2">
                    <img src="https://www.copaair.com/promotions/destinations/icons/calendar-icon.svg" class="h-[10.3px] w-[11.6px]" alt="date">
                    <span class={getTypography('body-small')} >
                        Ida y vuelta<br>Ago 15, 2024 - Nov 30, 2024
                    </span>
                </span>
            </span>
            <span class="mx-2 mt-2 col-start-3 col-end-3 row-start-3 row-end-3 ">
                <span class="flex flex-col items-end grid-rows-subgrid">
                    <span class={getTypography('body',undefined,'font-suisse  text-grey-600 line-through self-end')}>USD 287</span>
                
                            <span class="gap-y-2">
                                <span class={getTypography('body-small')}>desde <span class={getTypography('caption-tiny','h2', 'font-gilroy font-bold text-primary lg:text-u1 ')}>COP 1.000.249<sup>*</sup></span>
                            </span>
                </span>
                <span class={getTypography('body-small')}>Impuestos incluidos de COP 1.032.432 </span>
            </span>
    </a>
</li>

</ol>


<p class={getTypography('body','body','text-grey-600 text-center pt-4')} >
*Aplican restricciones, consulte nuestros 
<a href="https://www.copaair.com/es/vuelos-terminos-y-condiciones" target="_blank" rel="noopener"><span class={getTypography('body','body','text-primary hover:!underline')}>T&eacute;rminos y condiciones</span>
</a>.</p>

</div>