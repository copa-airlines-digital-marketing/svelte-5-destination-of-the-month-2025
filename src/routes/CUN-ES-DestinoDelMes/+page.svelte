<script>
	import * as MainHeader from '$lib/components/ui/MainTitle';
	import * as MainImage from '$lib/components/ui/Image';
	import * as MainIntro from '$lib/components/ui/Intro';
	import * as MainContent from '$lib/components/ui/Content';
	import * as FareIntro from '$lib/components/ui/ESFareIntro';
</script>

<MainHeader.Root>
	<MainHeader.BreadcrumbsES></MainHeader.BreadcrumbsES>
	<MainHeader.MainLogo dLogoID="c7eec0cd-2034-4132-9ba8-41b9aeab2714"></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="194a3d1f-eac1-43d8-94a6-6e3a350f03c4"></MainImage.Root>

<MainIntro.Root
	introTitle="Descubre la Magia del Caribe en Cancún"
	introDescription="Ubicado en la costa del Caribe mexicano, Cancún es un paraíso que combina playas de arena blanca, aguas turquesas y una oferta turística vibrante. Este destino te invita a relajarte, explorar y vivir experiencias inolvidables bajo el sol."
	introBookURL="https://www.google.com"
	introBookCTA="Reserva Ahora"
/>

<MainContent.Root>
	<MainContent.Card
		cardTitle="Explora las Playas de Cancún: Belleza sin Igual"
		cardDescription="Las playas de Cancún son mundialmente conocidas por su arena suave y su mar cristalino. Ya sea que quieras nadar, practicar deportes acuáticos o simplemente descansar bajo una palapa, encontrarás tu rincón perfecto frente al mar."
		cardImageID="image-1"
		cardImageAlt="Playa de Cancún"
	/>

	<MainContent.Card
		cardTitle="Vive la Cultura en el Centro y Mercado 28"
		cardDescription="Más allá de la zona hotelera, el corazón local de Cancún te espera con sabores auténticos y artesanías coloridas. En el Mercado 28 puedes disfrutar de la gastronomía tradicional, comprar recuerdos y conocer el lado más cultural de la ciudad."
		cardImageID="image-2"
		cardImageAlt="Mercado 28 Cancún"
	/>

	<MainContent.Card
		cardTitle="Saborea la Gastronomía Yucateca"
		cardDescription="Desde cochinita pibil hasta panuchos y ceviches frescos, la cocina regional es una fusión de sabores mayas y mexicanos. Descubre restaurantes locales y mercados donde cada platillo cuenta una historia ancestral."
		cardImageID="image-3"
		cardImageAlt="Comida yucateca"
	/>

	<MainContent.Card
		cardTitle="Disfruta la Vida Nocturna en Cancún"
		cardDescription="Cuando cae la noche, Cancún se transforma en un centro de entretenimiento. Clubes, bares frente al mar y espectáculos en vivo ofrecen diversión para todos los estilos. La fiesta en Cancún no tiene fin."
		cardImageID="image-4"
		cardImageAlt="Vida nocturna en Cancún"
	/>
</MainContent.Root>
<FareIntro.Root
	destination="Cancún"
	bookLimitDate="31 de julio"
	bookLimitYear="2025"
	flyLimitDate="16 de octubre"
	flyLimitYear="2025"
/>
