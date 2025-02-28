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
   <MainHeader.MainLogo dLogoID='fccce0d6-56ae-4c6d-9e31-c1ca0e9a7a07'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="1b589009-eb2d-466d-adb4-df5c872e76fa" ></MainImage.Root>

<MainIntro.Root 
  introTitle="Descubra o Espírito Vibrante de Bogotá" 
  introDescription="No coração da Colômbia encontra-se uma cidade que combina história, modernidade e uma energia incomparável. Bem-vindo a Bogotá, um destino onde cada esquina conta uma história e cada experiência deixa uma marca inesquecível. Mais do que uma visita, esta jornada convida você a mergulhar na cultura, tradições e no ritmo dinâmico de uma das cidades mais fascinantes da América Latina." 
  introBookURL="https://www.google.com"
  introBookCTA="Reserve Agora"
></MainIntro.Root>

<MainContent.Root>
    <MainContent.Card
      cardTitle="Suba ao Monserrate: A Melhor Vista da Cidade" 
      cardDescription="Bogotá se revela aos seus pés a partir do Monserrate, o mirante mais icônico da cidade. Seja de teleférico, funicular ou caminhada, chegar ao topo é uma experiência inesquecível. No alto, você pode visitar o santuário, explorar trilhas panorâmicas e desfrutar da culinária tradicional colombiana em restaurantes com vistas espetaculares." 
      cardImageID="b907d70a-4302-4b89-9adc-51d49809ccf6"
      cardImageAlt="Mirante Monserrate" 
    ></MainContent.Card>

    <MainContent.Card
      cardTitle="Explore a História de La Candelaria" 
      cardDescription="O centro histórico de Bogotá, La Candelaria, é um verdadeiro tesouro cultural repleto de cores e tradições. Suas ruas de paralelepípedos, casas coloniais e vibrante cena artística fazem dele o local perfeito para explorar. Visite o Museu do Ouro, admire as obras de Fernando Botero em seu museu dedicado e encante-se com os murais urbanos que decoram o bairro. Cada canto de La Candelaria guarda um pedaço da história da Colômbia." 
      cardImageID="02e147fe-4d31-48f9-a429-2e9b455a8a6c"
      cardImageAlt="La Candelaria" 
    ></MainContent.Card>

    <MainContent.Card
      cardTitle="Viva a Noite de Bogotá" 
      cardDescription="Quando a noite cai, Bogotá ganha vida com energia e animação. De bares sofisticados na Zona T a clubes de dança latina na Zona Rosa, a cidade oferece entretenimento para todos os gostos. Aproveite o ambiente festivo em Usaquén, experimente coquetéis exclusivos e dance até o amanhecer ao som de música ao vivo." 
      cardImageID="a75c0d74-0722-458d-8c0d-937447f78ad1"
      cardImageAlt="Vida Noturna de Bogotá" 
    ></MainContent.Card>

    <MainContent.Card
      cardTitle="Escape para Zipaquirá: Um Tesouro Subterrâneo" 
      cardDescription="A poucos quilômetros da cidade, Zipaquirá espera por você com sua deslumbrante Catedral de Sal, uma maravilha arquitetônica esculpida dentro de uma mina de sal. Caminhe por seus túneis iluminados, admire as esculturas intrincadas e experimente a atmosfera serena deste santuário subterrâneo. Depois, explore o charmoso centro colonial da cidade e desfrute de um momento tranquilo longe da agitação urbana." 
      cardImageID="d1207d49-faa6-414b-8665-ac56f54e2306"
      cardImageAlt="Catedral de Sal de Zipaquirá" 
    ></MainContent.Card>
</MainContent.Root>

<FareIntro.Root
destination="Bogotá"
bookLimitDate="31 de janeiro" 
bookLimitYear="2025"
flyLimitDate="31 de maio"
flyLimitYear="2025"
></FareIntro.Root>


