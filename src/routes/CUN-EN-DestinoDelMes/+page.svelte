<script>
	import * as MainHeader from '$lib/components/ui/MainTitle';
	import * as MainImage from '$lib/components/ui/Image';
	import * as MainIntro from '$lib/components/ui/Intro';
	import * as MainContent from '$lib/components/ui/Content';
	import * as FareIntro from '$lib/components/ui/ENFareIntro';
</script>

<MainImage.Root mainImageID="194a3d1f-eac1-43d8-94a6-6e3a350f03c4"></MainImage.Root>
<MainIntro.Root
	introTitle="Experience the Magic of the Caribbean in Cancún"
	introDescription="Located on Mexico’s Caribbean coast, Cancún is a tropical paradise that blends white-sand beaches, turquoise waters, and a vibrant tourism scene. This destination invites you to relax, explore, and create unforgettable memories under the sun."
	introBookURL="https://www.google.com"
	introBookCTA="Book Now"
/>

<MainContent.Root>
	<MainContent.Card
		cardTitle="Discover Cancún’s Beaches: Unmatched Beauty"
		cardDescription="Cancún’s beaches are world-famous for their soft sand and crystal-clear water. Whether you're swimming, enjoying water sports, or simply relaxing under a palapa, you’ll find your perfect spot by the sea."
		cardImageID="image-1"
		cardImageAlt="Cancún beach"
	/>

	<MainContent.Card
		cardTitle="Immerse Yourself in Local Culture at Downtown & Market 28"
		cardDescription="Beyond the hotel zone lies Cancún’s authentic heart. At Market 28, you can enjoy traditional food, shop for handmade souvenirs, and connect with the city’s rich cultural side."
		cardImageID="image-2"
		cardImageAlt="Market 28 Cancún"
	/>

	<MainContent.Card
		cardTitle="Savor Yucatecan Cuisine"
		cardDescription="From cochinita pibil to panuchos and fresh ceviche, the region’s cuisine is a flavorful mix of Mayan and Mexican traditions. Visit local restaurants and markets where every dish tells an ancestral story."
		cardImageID="image-3"
		cardImageAlt="Yucatecan food"
	/>

	<MainContent.Card
		cardTitle="Enjoy the Nightlife in Cancún"
		cardDescription="As the sun sets, Cancún turns into a hub of entertainment. Beachfront bars, clubs, and live shows offer a wide range of fun. The party never ends in Cancún."
		cardImageID="image-4"
		cardImageAlt="Cancún nightlife"
	/>
</MainContent.Root>

<FareIntro.Root
	destination="Cancún"
	bookLimitDate="July 31"
	bookLimitYear="2025"
	flyLimitDate="October 16"
	flyLimitYear="2025"
/>
