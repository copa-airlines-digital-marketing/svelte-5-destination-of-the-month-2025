<script>
    import * as MainHeader from "$lib/components/ui/MainTitle";
    import * as MainImage from "$lib/components/ui/Image";
    import * as MainIntro from "$lib/components/ui/Intro";
    import * as MainContent from "$lib/components/ui/Content";
	import * as FareIntro from "$lib/components/ui/ESFareIntro";
</script>


<MainHeader.Root >
   <MainHeader.BreadcrumbsES></MainHeader.BreadcrumbsES>
   <MainHeader.MainLogo dLogoID='8d48eaba-f3d5-4d0b-8674-5b02aa5fced1'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="fddde618-c367-4e09-aeb0-20349ae2f075" ></MainImage.Root>
<MainIntro.Root 
  introTitle="Descubre la Esencia Cultural de Guatemala"
  introDescription="En el corazón de Centroamérica se encuentra Guatemala, un país vibrante lleno de historia, paisajes asombrosos y una riqueza cultural que se siente en cada rincón. Desde majestuosos volcanes hasta mercados coloridos y pueblos coloniales, este destino te invita a conectar con lo auténtico y lo ancestral."
  introBookURL="https://www.google.com"
  introBookCTA="Reserva Ahora"
/>

<MainContent.Root>
  <MainContent.Card
    cardTitle="Explora el Lago Atitlán: Un Tesoro Natural"
    cardDescription="Rodeado de volcanes y pintorescos pueblos mayas, el Lago Atitlán es uno de los paisajes más impactantes del país. Disfruta de paseos en lancha, caminatas escénicas y la calidez de comunidades locales donde las tradiciones milenarias conviven con la hospitalidad guatemalteca."
    cardImageID="733a1e28-69b7-49d4-ac6d-2232e1a676de"
    cardImageAlt="Lago Atitlán"
  />
  
  <MainContent.Card
    cardTitle="Vive la Cultura en la Calle Santander, Panajachel"
    cardDescription="Esta animada calle en el corazón de Panajachel es perfecta para sumergirse en la cultura local. Descubre artesanías, textiles coloridos, galerías de arte y sabores tradicionales en cada esquina. Aquí se respira el alma creativa del altiplano guatemalteco."
    cardImageID="b7ac17db-2047-419a-9d99-e9de4f9d01fd"
    cardImageAlt="Calle Santander en Panajachel"
  />

  <MainContent.Card
    cardTitle="Saborea la Gastronomía Guatemalteca"
    cardDescription="Desde el kak’ik hasta los tamales y el pepián, Guatemala ofrece un recorrido gastronómico lleno de sabor y tradición. Visita mercados y restaurantes locales para disfrutar platos que han pasado de generación en generación."
    cardImageID="254163c4-2402-487a-93ef-7b20d35c5312"
    cardImageAlt="Comida tradicional guatemalteca"
  />

  <MainContent.Card
    cardTitle="Descubre la Vida Nocturna en Antigua Guatemala"
    cardDescription="Cuando cae la noche, las calles empedradas de Antigua se iluminan con bares, cafés y terrazas con vistas a ruinas coloniales. La ciudad ofrece un ambiente único donde la historia y la vida nocturna se combinan en armonía."
    cardImageID="55c20386-f566-4940-bd4d-79c8cebc6bc5"
    cardImageAlt="Vida nocturna en Antigua Guatemala"
  />
</MainContent.Root>

<FareIntro.Root
  destination="Guatemala"
  bookLimitDate="31 de mayo"
  bookLimitYear="2025"
  flyLimitDate="15 de octubre"
  flyLimitYear="2025"
></FareIntro.Root>



