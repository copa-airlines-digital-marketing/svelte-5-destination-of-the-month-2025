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
   <MainHeader.MainLogo dLogoID='7012313d-2b02-4d54-a934-7221796756eb'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="1b589009-eb2d-466d-adb4-df5c872e76fa" ></MainImage.Root>
<MainIntro.Root 
  introTitle="Discover the Vibrant Spirit of Bogotá" 
  introDescription="In the heart of Colombia lies a city that blends history, modernity, and an unmatched energy. Welcome to Bogotá, a destination where every corner tells a story and every experience leaves a lasting impression. More than just a visit, this journey invites you to immerse yourself in the culture, traditions, and dynamic rhythm of one of Latin America's most fascinating cities." 
  introBookURL="https://www.google.com"
  introBookCTA="Book Now"
></MainIntro.Root>

<MainContent.Root>
    <MainContent.Card
      cardTitle="Climb to Monserrate: The Best View in the City" 
      cardDescription="Bogotá unfolds beneath you from Monserrate, the city's most iconic viewpoint. Whether you take the cable car, funicular, or hike up, reaching the summit is an unforgettable experience. Once at the top, you can visit the sanctuary, explore scenic trails, and enjoy traditional Colombian cuisine in restaurants with breathtaking views." 
      cardImageID="b907d70a-4302-4b89-9adc-51d49809ccf6"
      cardImageAlt="Monserrate Viewpoint" 
    ></MainContent.Card>

    <MainContent.Card
      cardTitle="Explore the History of La Candelaria" 
      cardDescription="Bogotá’s historic center, La Candelaria, is a cultural gem bursting with color and tradition. Its cobblestone streets, colonial houses, and vibrant artistic scene make it the perfect place to explore. Visit the Gold Museum, admire the works of Fernando Botero in his dedicated museum, and be amazed by the urban murals decorating the neighborhood. Every corner of La Candelaria holds a piece of Colombia’s history." 
      cardImageID="02e147fe-4d31-48f9-a429-2e9b455a8a6c"
      cardImageAlt="La Candelaria" 
    ></MainContent.Card>

    <MainContent.Card
      cardTitle="Experience Bogotá’s Nightlife" 
      cardDescription="When night falls, Bogotá comes alive with energy and excitement. From stylish bars in Zona T to lively Latin dance clubs in Zona Rosa, the city offers entertainment for every taste. Enjoy the festive atmosphere in Usaquén, sip on unique cocktails, and dance until dawn to live music." 
      cardImageID="a75c0d74-0722-458d-8c0d-937447f78ad1"
      cardImageAlt="Bogotá Nightlife" 
    ></MainContent.Card>

    <MainContent.Card
      cardTitle="Escape to Zipaquirá: A Subterranean Treasure" 
      cardDescription="Just a short drive from the city, Zipaquirá awaits with its breathtaking Salt Cathedral, an architectural wonder carved inside a salt mine. Wander through its illuminated tunnels, admire the intricate sculptures, and experience the peaceful atmosphere of this underground sanctuary. Afterward, explore the town’s charming colonial center and enjoy a quiet moment away from the bustling city." 
      cardImageID="d1207d49-faa6-414b-8665-ac56f54e2306"
      cardImageAlt="Zipaquirá Salt Cathedral" 
    ></MainContent.Card>
</MainContent.Root>


<FareIntro.Root
destination="Bogota"
bookLimitDate="March 31 " 
bookLimitYear="2025"
flyLimitDate="July 31"
flyLimitYear="2025"
></FareIntro.Root>


