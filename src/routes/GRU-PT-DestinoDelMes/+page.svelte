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
   <MainHeader.MainLogo dLogoID='4be36295-2795-40a4-8a2e-713772d56894'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="c3c1b68c-17f7-4dcf-a051-fb0db8a653f3" ></MainImage.Root>

<MainIntro.Root 
introTitle="Descubra o Encanto de Cartagena" 
introDescription="Esta histórica cidade colombiana combina um rico patrimônio cultural, praias douradas e uma vida noturna vibrante. Em Cartagena, cada canto conta uma história, desde as ruas de paralelepípedos de sua Cidade Murada até as paisagens paradisíacas das Ilhas do Rosário." 
introBookURL="https://www.google.com"
introBookCTA="Reserve Agora"
></MainIntro.Root>

<MainContent.Root>
    <MainContent.Card
    cardTitle="Relaxe Sob o Sol do Caribe" 
    cardDescription="Cartagena é conhecida por suas praias, onde o sol e o mar se unem para criar o cenário perfeito para relaxar. A praia de Bocagrande oferece um ambiente animado e confortável, ideal para famílias e amigos. Para quem busca algo mais exclusivo, as Ilhas do Rosário e Barú, com suas areias brancas e águas cristalinas, são incomparáveis. Lá, Playa Blanca se destaca por sua serenidade e beleza, convidando você a aproveitar um dia de descanso com uma deliciosa limonada de coco na mão." 
    cardImageID="34733aa0-234f-4f9c-a513-d70b4adc2587"
    cardImageAlt="Relaxe Sob o Sol do Caribe" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Viva uma Aventura Tropical" 
    cardDescription="Cartagena também é um destino para os aventureiros. Esportes aquáticos como caiaque, snorkeling e stand-up paddle são populares na região. Além disso, a área oferece a oportunidade de mergulhar entre recifes de coral e descobrir a vida marinha do Caribe colombiano. Se você prefere manter os pés no chão, uma visita ao Vulcão Totumo permite que você tome um banho de lama vulcânica—uma experiência divertida e única." 
    cardImageID="2706208c-a0ae-4dc6-9be8-9c873674b5d7"
    cardImageAlt="Viva uma Aventura Tropical" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Sinta o Ritmo da Cidade" 
    cardDescription="A Cidade Murada de Cartagena é um tesouro histórico cheio de charme. Suas ruas de paralelepípedos, varandas floridas e praças coloniais convidam você a se perder em uma viagem ao passado. Passeie pelo emblemático bairro de San Diego, visite a Torre do Relógio e maravilhe-se com a arquitetura de igrejas como a Catedral de Santa Catalina de Alejandría. Não deixe de caminhar pelas muralhas que protegeram a cidade de piratas e ataques, oferecendo vistas espetaculares do mar do Caribe. Cada canto está cheio de história e romance, ideal para fotos inesquecíveis e momentos únicos." 
    cardImageID="07b24005-136c-456e-86dd-acfcf7f50511"
    cardImageAlt="Sinta o Ritmo da Cidade" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Saboreie os Sabores de Cartagena" 
    cardDescription="A culinária de Cartagena é uma fusão de tradições africanas, indígenas e espanholas que encantam os paladares mais exigentes. Experimente delícias locais como arepas de huevo, carimañolas ou arroz com coco acompanhado de peixe frito. Para algo mais especial, um prato de mote de queijo ou uma caçarola de frutos do mar será inesquecível. Não se esqueça de se refrescar com uma limonada de panela ou um coquetel de corozo para completar a experiência." 
    cardImageID="1da0f2ef-d267-4aaa-bf3a-06a6697de6aa"
    cardImageAlt="Saboreie os Sabores de Cartagena" 
    ></MainContent.Card>
</MainContent.Root>

<FareIntro.Root
destination="Cartagena"
bookLimitDate="31 de janeiro" 
bookLimitYear="2025"
flyLimitDate="31 de maio"
flyLimitYear="2025"
></FareIntro.Root>



