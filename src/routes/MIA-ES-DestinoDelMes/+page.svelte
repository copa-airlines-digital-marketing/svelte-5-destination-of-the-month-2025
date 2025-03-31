<script>
    import * as MainHeader from "$lib/components/ui/MainTitle";
    import * as MainImage from "$lib/components/ui/Image";
    import * as MainIntro from "$lib/components/ui/Intro";
    import * as MainContent from "$lib/components/ui/Content";
	import * as FareIntro from "$lib/components/ui/ESFareIntro";
</script>


<MainHeader.Root >
   <MainHeader.BreadcrumbsES></MainHeader.BreadcrumbsES>
   <MainHeader.MainLogo dLogoID='ba9544a0-e8f0-4330-91f4-b4f95f6c0e4c'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="6aff1bec-f0bc-4131-aeb3-2c6b2da95aaa" ></MainImage.Root>
<MainIntro.Root 
introTitle="Descubre la Esencia Vibrante de Miami" 
introDescription="En el corazón de Florida, Miami brilla como una ciudad donde el sol, la cultura y la modernidad se fusionan a la perfección. Cada rincón cuenta una historia y cada experiencia deja una huella imborrable. Este viaje es más que una visita: es una invitación a sumergirte en la energía única de una de las ciudades más icónicas del mundo."
introBookURL="https://www.google.com"
introBookCTA="Reserva Ahora"
></MainIntro.Root>

<MainContent.Root>
    <MainContent.Card
    cardTitle="Relájate en South Beach: Arena, Sol y Estilo" 
    cardDescription="South Beach es más que una playa; es un estilo de vida. Con su arena blanca, aguas cristalinas y la icónica Ocean Drive, puedes relajarte, tomar el sol o pasear entre edificios históricos Art Deco." 
    cardImageID="bc153511-d0d4-4b0e-a1c6-641ecc1cfa2e"
    cardImageAlt="South Beach" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Recorre la Calle Ocho en Little Havana" 
    cardDescription="Sumérgete en el alma cubana de Miami explorando la vibrante Calle Ocho en Little Havana. Desde el aroma del café cubano hasta el ritmo de la salsa, esta calle es una celebración de la cultura latina." 
    cardImageID="db8973f9-2804-4298-9c51-f8a90816535a"
    cardImageAlt="Little Havana" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Disfruta de la Gastronomía de Clase Mundial de Miami" 
    cardDescription="La escena gastronómica de Miami es un crisol de sabores globales. Desde mariscos frescos hasta sándwiches cubanos y alta cocina fusión, cada comida es una aventura culinaria." 
    cardImageID="b6b3d894-171d-4b39-bcfa-9fe3dfa4bbb2"
    cardImageAlt="Gastronomía de Miami" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Vive la Emoción de la Vida Nocturna de Miami" 
    cardDescription="Cuando cae el sol, Miami se transforma en un paraíso nocturno. Ya sea que prefieras bares en azoteas, clubes de baile latino o vibrantes escenarios de música electrónica, la ciudad tiene algo para todos." 
    cardImageID="9d679c0f-7e5c-4158-ab6c-0005ac3df584"
    cardImageAlt="Vida Nocturna de Miami" 
    ></MainContent.Card>
</MainContent.Root>

<FareIntro.Root
destination="Miami"
bookLimitDate="30 de abril"
bookLimitYear="2025"
flyLimitDate="31 de octubre"
flyLimitYear="2025"
></FareIntro.Root>




