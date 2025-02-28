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
   <MainHeader.MainLogo dLogoID='e6a7355b-f81f-46b0-b51e-6929b64b12c3'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="bfd56df5-84a3-4158-a846-1fdad6ff222e" ></MainImage.Root>

<MainIntro.Root 
introTitle="Discover the Vibrant Soul of São Paulo" 
introDescription="In the heart of Brazil beats a city that combines modernity, culture and unparalleled energy. Welcome to São Paulo, a destination where every corner tells a story and every experience leaves an unforgettable mark. This trip is not just a visit, it is an invitation to explore the diversity and rhythm of one of the world’s largest cities." 
introBookURL="https://www.google.com"
introBookCTA="Book Now"
></MainIntro.Root>

<MainContent.Root>
    <MainContent.Card
    cardTitle="Explore Ibirapuera Park: An Urban Oasis" 
    cardDescription="Amidst the hustle and bustle of the city, Ibirapuera Park offers a green haven full of life. This iconic space has plenty of areas for walking, biking or just relaxing under the shade of trees. Discover museums, sculptures and cultural events while enjoying a peaceful environment surrounded by the vibrant nature of São Paulo" 
    cardImageID="5ec2a733-b71d-44c4-bb33-bb8e5120848e"
    cardImageAlt="Ibirapuera Park" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Experience Culture on Paulista Avenue" 
    cardDescription="The iconic Paulista Avenue is much more than an avenue; it is the cultural and financial heart of São Paulo. Visit its museums, such as the MASP, with its imposing architecture and international art collections, or explore street fairs and open-air art performances. Every step on this avenue connects you with the creativity and dynamism of the city." 
    cardImageID="948c0565-015d-4760-a710-765ff6880f0c"
    cardImageAlt="Paulista Avenue" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Be Surprised by the Nightlife" 
    cardDescription="Nightlife in São Paulo comes alive with a unique vibe. From fancy bars in the skyscrapers of Vila Olímpia and Itaim Bibi, to samba and bossa nova clubs in the bohemian neighborhood of Vila Madalena, there’s something for everyone. Enjoy carefully prepared cocktails, live music and the contagious festive spirit of the people of São Paulo, who know how to celebrate life to the fullest." 
    cardImageID="6b0f9cf4-d476-4515-ad16-a7bc8d23c92b"
    cardImageAlt=" the Rhythm of the City" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Relax in Embu das Artes: A Cultural Getaway" 
    cardDescription="Just a few miles from downtown São Paulo, Embu das Artes is a picturesque village known for its artistic charm. Stroll through its cobblestone streets, explore markets filled with handicrafts and enjoy its bohemian atmosphere. Here you can unwind from the urban hustle and bustle while immersing yourself in Brazil’s rich cultural tradition." 
    cardImageID="2d5c75ef-6482-4a65-a550-86af708b3759"
    cardImageAlt="Embu das Artes" 
    ></MainContent.Card>
</MainContent.Root>

<FareIntro.Root
destination="Sao Paulo"
bookLimitDate="February 28 " 
bookLimitYear="2025"
flyLimitDate="June 30"
flyLimitYear="2025"
></FareIntro.Root>


