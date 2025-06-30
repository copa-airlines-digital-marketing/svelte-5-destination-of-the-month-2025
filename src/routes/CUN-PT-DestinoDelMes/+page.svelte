<script>
	import { getTypography } from '$lib/components/foundations/typography';
	import * as MainHeader from '$lib/components/ui/MainTitle';
	import * as MainImage from '$lib/components/ui/Image';
	import * as MainIntro from '$lib/components/ui/Intro';
	import * as MainContent from '$lib/components/ui/Content';
	import * as FareIntro from '$lib/components/ui/PTFareIntro';
</script>

<MainHeader.Root>
	<MainHeader.BreadcrumbsPT></MainHeader.BreadcrumbsPT>
	<MainHeader.MainLogo dLogoID="4be36295-2795-40a4-8a2e-713772d56894"></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="194a3d1f-eac1-43d8-94a6-6e3a350f03c4"></MainImage.Root>

<MainIntro.Root
	introTitle="Descubra a Magia do Caribe em Cancún"
	introDescription="Localizada na costa caribenha do México, Cancún é um paraíso tropical com praias de areia branca, águas turquesa e uma cena turística vibrante. Este destino convida você a relaxar, explorar e viver momentos inesquecíveis sob o sol."
	introBookURL="https://www.google.com"
	introBookCTA="Reserve Agora"
/>

<MainContent.Root>
	<MainContent.Card
		cardTitle="Explore as Praias de Cancún: Beleza Incomparável"
		cardDescription="As praias de Cancún são famosas no mundo todo por sua areia macia e águas cristalinas. Seja para nadar, praticar esportes aquáticos ou apenas descansar sob uma palapa, você encontrará o seu lugar perfeito à beira-mar."
		cardImageID="image-1"
		cardImageAlt="Praia de Cancún"
	/>

	<MainContent.Card
		cardTitle="Mergulhe na Cultura no Centro e no Mercado 28"
		cardDescription="Fora da zona hoteleira, o centro de Cancún oferece sabores autênticos e artesanatos locais. No Mercado 28, você pode experimentar a culinária tradicional, comprar lembranças e conhecer o lado mais cultural da cidade."
		cardImageID="image-2"
		cardImageAlt="Mercado 28 Cancún"
	/>

	<MainContent.Card
		cardTitle="Saboreie a Culinária Iucatana"
		cardDescription="De cochinita pibil a panuchos e ceviches frescos, a gastronomia da região é uma fusão de sabores maias e mexicanos. Descubra restaurantes e mercados locais onde cada prato conta uma história ancestral."
		cardImageID="image-3"
		cardImageAlt="Comida iucatana"
	/>

	<MainContent.Card
		cardTitle="Curta a Vida Noturna em Cancún"
		cardDescription="Quando anoitece, Cancún se transforma em um centro de entretenimento. Bares à beira-mar, casas noturnas e shows ao vivo garantem diversão para todos os estilos. A festa em Cancún nunca termina."
		cardImageID="image-4"
		cardImageAlt="Vida noturna em Cancún"
	/>
</MainContent.Root>

<FareIntro.Root
	destination="Cancún"
	bookLimitDate="31 de julho"
	bookLimitYear="2025"
	flyLimitDate="16 de outubro"
	flyLimitYear="2025"
/>
