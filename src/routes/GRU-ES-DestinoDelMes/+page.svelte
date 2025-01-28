<script>
    import * as MainHeader from "$lib/components/ui/MainTitle";
    import * as MainImage from "$lib/components/ui/Image";
    import * as MainIntro from "$lib/components/ui/Intro";
    import * as MainContent from "$lib/components/ui/Content";
	import * as FareIntro from "$lib/components/ui/ESFareIntro";
</script>


<MainHeader.Root >
   <MainHeader.BreadcrumbsES></MainHeader.BreadcrumbsES>
   <MainHeader.MainLogo dLogoID='c7eec0cd-2034-4132-9ba8-41b9aeab2714'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="194a3d1f-eac1-43d8-94a6-6e3a350f03c4" ></MainImage.Root>

<MainIntro.Root 
introTitle="Descubre México, un país lleno de magia y contrastes" 
introDescription="México es un destino vibrante que combina historia, cultura, gastronomía y paisajes impresionantes. Desde la capital cosmopolita hasta ciudades llenas de tradiciones, cada rincón ofrece algo único por descubrir." 
introBookURL="https://www.google.com"
introBookCTA="Reserva ya"
></MainIntro.Root>
s
<MainContent.Root>
    <MainContent.Card
    cardTitle="Vuela a Ciudad de México: la metrópoli que lo tiene todo" 
    cardDescription="Explora el Zócalo, Chapultepec y sus museos, mientras disfrutas de una gastronomía que combina lo tradicional con lo moderno." 
    cardImageID="1b374647-4e07-44d9-8721-5ef0c850afc3"
    cardImageAlt="Ciudad de México" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Descubre Guadalajara: tradición y modernidad en la Perla Tapatía" 
    cardDescription="Visita la Catedral, el Instituto Cultural Cabañas y los mercados de Tlaquepaque, donde las artesanías y la cultura tapatía brillan." 
    cardImageID="6e6841ca-5269-4c2f-96dd-c218907b179f"
    cardImageAlt="Vive una aventura tropical" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Conoce Monterrey: la ciudad de las montañas" 
    cardDescription="Conquista el Cerro de la Silla, relájate en el Parque Fundidora y disfruta de su deliciosa gastronomía regia." 
    cardImageID="7612a373-336d-4d1a-831b-11e4df69aa2e"
    cardImageAlt="Reserva Ecológica Ojos Indígenas" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Tres ciudades, una experiencia única" 
    cardDescription="México te invita a descubrir su riqueza cultural, natural y culinaria en tres ciudades que capturan el corazón de su diversidad." 
    cardImageID="0f6f5f52-12a6-4809-9615-519758f46d15"
    cardImageAlt="Deléitate con los sabores cartageneros" 
    ></MainContent.Card>
</MainContent.Root>

<FareIntro.Root
destination="México"
bookLimitDate="31 de enero" 
bookLimitYear="2025"
flyLimitDate="31 de mayo"
flyLimitYear="2025"

></FareIntro.Root>



