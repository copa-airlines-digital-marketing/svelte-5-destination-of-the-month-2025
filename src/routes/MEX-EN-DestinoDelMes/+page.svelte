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
   <MainHeader.MainLogo dLogoID='4bd2df19-5d8d-4acd-9a73-f596bfa7e8f6'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="c3c1b68c-17f7-4dcf-a051-fb0db8a653f3" ></MainImage.Root>

<MainIntro.Root 
introTitle="Discover the Charm of Cartagena" 
introDescription="This historic Colombian city combines a rich cultural heritage, golden beaches, and a vibrant nightlife. In Cartagena, every corner tells a story, from the cobblestone streets of its Walled City to the paradisiacal landscapes of the Rosario Islands." 
introBookURL="https://www.google.com"
introBookCTA="Book Now"
></MainIntro.Root>

<MainContent.Root>
    <MainContent.Card
    cardTitle="Relax Under the Caribbean Sun" 
    cardDescription="Cartagena is renowned for its beaches, where the sun and sea come together to create the perfect setting for relaxation. Bocagrande Beach offers a lively and comfortable environment, ideal for families and friends. For those seeking something more exclusive, the Rosario and Barú Islands, with white sands and crystal-clear waters, are unmatched. There, Playa Blanca stands out for its serenity and beauty, inviting you to enjoy a day of relaxation with a delicious coconut lemonade in hand." 
    cardImageID="34733aa0-234f-4f9c-a513-d70b4adc2587"
    cardImageAlt="Relax Under the Caribbean Sun" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Experience a Tropical Adventure" 
    cardDescription="Cartagena is also a destination for adventurers. Water sports like kayaking, snorkeling, and paddleboarding are popular in the region. Additionally, the area offers the opportunity to dive among coral reefs and discover the marine life of the Colombian Caribbean. If you prefer to keep your feet on the ground, a trip to the Totumo Volcano lets you bathe in volcanic mud—a fun and unique experience." 
    cardImageID="2706208c-a0ae-4dc6-9be8-9c873674b5d7"
    cardImageAlt="Experience a Tropical Adventure" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Feel the Rhythm of the City" 
    cardDescription="Cartagena's Walled City is a historical treasure full of charm. Its cobblestone streets, flower-filled balconies, and colonial squares invite you to lose yourself in a journey to the past. Stroll through the iconic San Diego neighborhood, visit the Clock Tower, and marvel at the architecture of churches like the Cathedral of Santa Catalina de Alejandría. Don't miss walking along the walls that protected the city from pirates and attacks, offering spectacular views of the Caribbean Sea. Every corner is filled with history and romance, ideal for unforgettable photos and unique moments." 
    cardImageID="07b24005-136c-456e-86dd-acfcf7f50511"
    cardImageAlt="Feel the Rhythm of the City" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Savor Cartagena's Flavors" 
    cardDescription="Cartagena's cuisine is a fusion of African, Indigenous, and Spanish traditions that delight even the most discerning palates. Try local delicacies like arepas de huevo, carimañolas, or coconut rice paired with fried fish. For something more special, a plate of mote de queso or seafood casserole will be unforgettable. Don't forget to refresh yourself with a panela lemonade or a corozo cocktail to complete the experience." 
    cardImageID="1da0f2ef-d267-4aaa-bf3a-06a6697de6aa"
    cardImageAlt="Savor Cartagena's Flavors" 
    ></MainContent.Card>
</MainContent.Root>

<FareIntro.Root
destination="Cartagena"
bookLimitDate="January 31" 
bookLimitYear="2025"
flyLimitDate="May 31"
flyLimitYear="2025"
></FareIntro.Root>


