<script>
	import { getTypography } from '$lib/components/foundations/typography';
	import * as MainHeader from '$lib/components/ui/MainTitle';
	import * as MainImage from '$lib/components/ui/Image';
	import * as MainIntro from '$lib/components/ui/Intro';
	import * as MainContent from '$lib/components/ui/Content';
	import * as FareIntro from '$lib/components/ui/PTFareIntro';
</script>

<MainImage.Root mainImageID="d11fbad5-8eb9-43b5-8b0f-721a02a0fb73"></MainImage.Root>
<MainIntro.Root
	introTitle="Descubra a energia urbana de Chicago"
	introDescription="Às margens do Lago Michigan, Chicago combina arquitetura icônica, uma cena cultural vibrante e experiências gastronômicas únicas. Perfeito para uma escapada curta, este destino convida você a explorar sua essência em cada canto."
	introBookURL=""
	introBookCTA="Reserve Agora"
/>

<MainContent.Root>
	<MainContent.Card
		cardTitle="Explore o Millenium Park e o Cloud Gate"
		cardDescription="O famoso “Bean” é parada obrigatória para fotos memoráveis. Cercado por jardins, arte e música, este parque é o coração do centro da cidade."
		cardImageID="cc5a66fe-3ccd-4e6f-95e1-5c6072769f05"
		cardImageAlt="Millenium Park e o Cloud Gate"
	/>

	<MainContent.Card
		cardTitle="Aprecie a arquitetura e o rio Chicago"
		cardDescription="Embarque em um passeio de barco pelo rio para conhecer os arranha-céus que contam a história arquitetônica da cidade. Uma experiência única ao entardecer."
		cardImageID="f1932803-1f6f-4917-8e1c-ce7b69939b8d"
		cardImageAlt="Arquitetura e o rio Chicago"
	/>

	<MainContent.Card
		cardTitle="Saboreie a culinária local"
		cardDescription="Experimente a autêntica pizza deep-dish, cachorros-quentes ao estilo Chicago e descubra restaurantes inovadores que misturam tradição e modernidade."
		cardImageID="558fdbd9-3398-459b-8657-7e0ac34f662b"
		cardImageAlt="pizza deep-dish"
	/>

	<MainContent.Card
		cardTitle="Viva a cultura e a arte"
		cardDescription="Do Art Institute of Chicago, com obras-primas mundiais, a bairros como Pilsen, com murais e galerias, a cidade respira criatividade em cada esquina."
		cardImageID="d21ff37b-0bcb-4eff-9d1b-32dd89bc29c9"
		cardImageAlt="a cidade respira criatividade em cada esquina"
	/>
</MainContent.Root>
<FareIntro.Root
	destination="Chicago"
	bookLimitDate="30 de setembro"
	bookLimitYear="2025"
	flyLimitDate="8 de fevereiro de 2026"
	flyLimitYear="2025"
/>
