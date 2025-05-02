<script>
	import { getTypography } from "$lib/components/foundations/typography";
    import * as MainHeader from "$lib/components/ui/MainTitle";
    import * as MainImage from "$lib/components/ui/Image";
    import * as MainIntro from "$lib/components/ui/Intro";
    import * as MainContent from "$lib/components/ui/Content";
	import * as FareIntro from "$lib/components/ui/ENFareIntro";
	</script>

<MainHeader.Root >
  <MainHeader.BreadcrumbsEN></MainHeader.BreadcrumbsEN>
  <MainHeader.MainLogo dLogoID='47011d27-f5d2-426b-a0a1-81277a0a468e'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="fddde618-c367-4e09-aeb0-20349ae2f075" ></MainImage.Root>


<MainIntro.Root 
  introTitle="Discover Guatemala’s Cultural Essence"
  introDescription="In the heart of Central America lies Guatemala, a vibrant country full of history, stunning landscapes, and a rich cultural heritage that resonates in every corner. From majestic volcanoes to colorful markets and colonial towns, this destination invites you to connect with the authentic and the ancestral."
  introBookURL="https://www.google.com"
  introBookCTA="Book Now"
/>

<MainContent.Root>
  <MainContent.Card
    cardTitle="Explore Lake Atitlán: A Natural Treasure"
    cardDescription="Surrounded by volcanoes and picturesque Mayan villages, Lake Atitlán is one of the most breathtaking sights in the country. Enjoy boat rides, scenic hikes, and the warmth of local communities where ancient traditions blend with Guatemalan hospitality."
    cardImageID="733a1e28-69b7-49d4-ac6d-2232e1a676de"
    cardImageAlt="Lake Atitlán"
  />

  <MainContent.Card
    cardTitle="Experience Culture on Calle Santander, Panajachel"
    cardDescription="This lively street in the heart of Panajachel is ideal for diving into local culture. Discover handicrafts, colorful textiles, art galleries, and traditional flavors on every corner. The creative spirit of the Guatemalan highlands is alive here."
    cardImageID="b7ac17db-2047-419a-9d99-e9de4f9d01fd"
    cardImageAlt="Calle Santander in Panajachel"
  />

  <MainContent.Card
    cardTitle="Savor Guatemalan Cuisine"
    cardDescription="From kak’ik to tamales and pepián, Guatemala offers a rich culinary journey full of flavor and tradition. Visit local markets and restaurants to enjoy dishes passed down through generations."
    cardImageID="254163c4-2402-487a-93ef-7b20d35c5312"
    cardImageAlt="Traditional Guatemalan food"
  />

  <MainContent.Card
    cardTitle="Discover Nightlife in Antigua Guatemala"
    cardDescription="When night falls, the cobblestone streets of Antigua light up with bars, cafés, and rooftop terraces overlooking colonial ruins. The city offers a unique atmosphere where history and nightlife blend in perfect harmony."
    cardImageID="55c20386-f566-4940-bd4d-79c8cebc6bc5"
    cardImageAlt="Nightlife in Antigua Guatemala"
  />
</MainContent.Root>





<FareIntro.Root
  destination="Guatemala"
  bookLimitDate="May 31"
  bookLimitYear="2025"
  flyLimitDate="October 15"
  flyLimitYear="2025"
></FareIntro.Root>

