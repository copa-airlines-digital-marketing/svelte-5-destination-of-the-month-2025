<script>
	import { getTypography } from "$lib/components/foundations/typography";
    import * as MainHeader from "$lib/components/ui/MainTitle";
    import * as MainImage from "$lib/components/ui/Image";
    import * as MainIntro from "$lib/components/ui/Intro";
    import * as MainContent from "$lib/components/ui/Content";
	import * as FareIntro from "$lib/components/ui/PTFareIntro";
	</script>


<MainHeader.Root >
   <MainHeader.BreadcrumbsPT></MainHeader.BreadcrumbsPT>
   <MainHeader.MainLogo dLogoID='1358f3c2-c5bd-4422-b588-48caaf7a09b4'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="6aff1bec-f0bc-4131-aeb3-2c6b2da95aaa" ></MainImage.Root>

<MainIntro.Root 
introTitle="Descubra a Essência Vibrante de Miami" 
introDescription="No coração da Flórida, Miami brilha como uma cidade onde o sol, a cultura e a modernidade se fundem perfeitamente. Cada canto conta uma história, e cada experiência deixa uma marca inesquecível. Esta viagem é mais do que uma visita – é um convite para mergulhar na energia única de uma das cidades mais icônicas do mundo."
introBookURL="https://www.google.com"
introBookCTA="Reserve Agora"
></MainIntro.Root>

<MainContent.Root>
    <MainContent.Card
    cardTitle="Relaxe em South Beach: Areia, Sol e Estilo" 
    cardDescription="South Beach é mais do que uma praia; é um estilo de vida. Com sua areia branca, águas cristalinas e a icônica Ocean Drive, você pode relaxar, tomar sol ou passear entre prédios históricos em estilo Art Déco." 
    cardImageID="bc153511-d0d4-4b0e-a1c6-641ecc1cfa2e"
    cardImageAlt="South Beach" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Explore a Calle Ocho em Little Havana" 
    cardDescription="Entre na alma cubana de Miami explorando a vibrante Calle Ocho em Little Havana. Do aroma do café cubano ao ritmo da salsa, esta rua é uma celebração da cultura latina." 
    cardImageID="db8973f9-2804-4298-9c51-f8a90816535a"
    cardImageAlt="Little Havana" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Descubra a Gastronomia de Classe Mundial de Miami" 
    cardDescription="A cena gastronômica de Miami é um verdadeiro caldeirão de sabores globais. De frutos do mar frescos a sanduíches cubanos e cozinha fusion sofisticada, cada refeição é uma aventura culinária." 
    cardImageID="b6b3d894-171d-4b39-bcfa-9fe3dfa4bbb2"
    cardImageAlt="Gastronomia de Miami" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Aproveite a Vida Noturna Agitada de Miami" 
    cardDescription="Ao anoitecer, Miami se transforma em um paraíso noturno. Seja em bares sofisticados nos terraços, clubes de dança latina ou casas de música eletrônica, há algo para todos." 
    cardImageID="9d679c0f-7e5c-4158-ab6c-0005ac3df584"
    cardImageAlt="Vida Noturna de Miami" 
    ></MainContent.Card>
</MainContent.Root>


<FareIntro.Root
destination="Miami"
bookLimitDate="30 de abril"
bookLimitYear="2025"
flyLimitDate="31 de outubro"
flyLimitYear="2025"
></FareIntro.Root>


