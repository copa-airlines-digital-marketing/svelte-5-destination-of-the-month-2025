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
   <MainHeader.MainLogo dLogoID='0e8fd4b4-6a08-4caa-99e4-cafb40825330'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="fddde618-c367-4e09-aeb0-20349ae2f075" ></MainImage.Root>

<MainIntro.Root 
  introTitle="Descubra a Essência Cultural da Guatemala"
  introDescription="No coração da América Central, está a Guatemala — um país vibrante repleto de história, paisagens deslumbrantes e uma herança cultural que se sente em cada canto. De vulcões majestosos a mercados coloridos e cidades coloniais, este destino convida você a se conectar com o autêntico e o ancestral."
  introBookURL="https://www.google.com"
  introBookCTA="Reserve Agora"
/>

<MainContent.Root>
  <MainContent.Card
    cardTitle="Explore o Lago Atitlán: Um Tesouro Natural"
    cardDescription="Rodeado por vulcões e vilarejos maias pitorescos, o Lago Atitlán é um dos cenários mais impressionantes do país. Curta passeios de barco, trilhas panorâmicas e a hospitalidade das comunidades locais, onde tradições antigas se fundem com o acolhimento guatemalteco."
    cardImageID="733a1e28-69b7-49d4-ac6d-2232e1a676de"
    cardImageAlt="Lago Atitlán"
  />

  <MainContent.Card
    cardTitle="Viva a Cultura na Calle Santander, Panajachel"
    cardDescription="Essa rua animada no coração de Panajachel é perfeita para mergulhar na cultura local. Descubra artesanatos, tecidos coloridos, galerias de arte e sabores tradicionais em cada esquina. Aqui se respira a alma criativa do altiplano guatemalteco."
    cardImageID="b7ac17db-2047-419a-9d99-e9de4f9d01fd"
    cardImageAlt="Calle Santander em Panajachel"
  />

  <MainContent.Card
    cardTitle="Saboreie a Gastronomia Guatemalteca"
    cardDescription="Do kak’ik aos tamales e pepián, a Guatemala oferece uma rica experiência gastronômica repleta de sabores e tradição. Visite mercados e restaurantes locais para provar pratos que atravessam gerações."
    cardImageID="254163c4-2402-487a-93ef-7b20d35c5312"
    cardImageAlt="Comida típica guatemalteca"
  />

  <MainContent.Card
    cardTitle="Descubra a Vida Noturna em Antigua Guatemala"
    cardDescription="Quando anoitece, as ruas de paralelepípedos de Antigua ganham vida com bares, cafés e terraços com vista para ruínas coloniais. A cidade oferece uma atmosfera única, onde a história e a vida noturna se misturam em perfeita harmonia."
    cardImageID="55c20386-f566-4940-bd4d-79c8cebc6bc5"
    cardImageAlt="Vida noturna em Antigua Guatemala"
  />
</MainContent.Root>



<FareIntro.Root
  destination="Guatemala"
  bookLimitDate="31 de maio"
  bookLimitYear="2025"
  flyLimitDate="15 de outubro"
  flyLimitYear="2025"
></FareIntro.Root>

