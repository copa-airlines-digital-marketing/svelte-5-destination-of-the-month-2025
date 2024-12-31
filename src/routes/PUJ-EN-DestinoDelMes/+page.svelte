<script>
	import { getTypography } from "$lib/components/foundations/typography";
    import * as MainHeader from "$lib/components/ui/MainTitle";
    import * as MainImage from "$lib/components/ui/Image";
    import * as MainIntro from "$lib/components/ui/Intro";
    import * as MainContent from "$lib/components/ui/Content";
	import * as FareIntroEN from "$lib/components/ui/ENFareIntro";
	</script>


<MainHeader.Root >
   <MainHeader.BreadcrumbsEN></MainHeader.BreadcrumbsEN>
   <MainHeader.MainLogo dLogoID='0dd78e50-4b71-4404-bc47-991894cf06c4'> </MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="269ea88d-85a0-423a-b115-9aa3c5310e9f" ></MainImage.Root>

<MainIntro.Root 
introTitle="Discover the Charms of Punta Cana" 
introDescription="In a corner of the Caribbean where nature and relaxation converge, there is a destination that offers total disconnection and unforgettable moments. Welcome to Punta Cana, a paradise where every sunrise over turquoise waters marks the beginning of a day full of adventures, flavors and emotions. This trip is not just a getaway, but an invitation to experience the Caribbean at its best." 
introBookURL="https://www.google.com"
introBookCTA="Book now"
></MainIntro.Root>

<MainContent.Root>
    <MainContent.Card
    cardTitle="Feel the Thrill of Catamaran Sailing and Snorkeling" 
    cardDescription="Embark on a catamaran ride and discover the marine life that inhabits the coral reefs of Punta Cana. Equipped with mask and snorkel, immerse yourself in an underwater world full of colorful fish and vibrant corals. Whether you prefer to relax on deck with music and drinks or explore the waters, this experience combines adventure and serenity." 
    cardImageID="c3e018a5-81b4-48b9-900f-3745af036869"
    cardImageAlt="Thrill of Catamaran Sailing and Snorkeling" 
    ></MainContent.Card>

    <MainContent.Card
    cardTitle="Relax in Macao: A True Paradise" 
    cardDescription="If you’re looking for a more natural and less developed environment, Macao Beach is the perfect place. Famous for its wild beauty, this beach offers waves that are ideal for surfing and a more tranquil setting for those who want to escape the hustle and bustle of tourism. Here you can enjoy a fresh lunch at one of the local beachfront restaurants, taste freshly caught fish and soak up the true essence of the Caribbean surrounded by stunning landscapes." 
    cardImageID="adeb73d4-13de-4974-90ce-2954bdaf3502"
    cardImageAlt="Relax in Macao" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Venture into the Ojos Indígenas Ecological Reserve" 
    cardDescription="Get deep into Punta Cana’s nature by visiting the Ojos Indígenas Ecological Reserve. This natural paradise is home to a network of trails that lead to twelve freshwater lagoons, perfect for a refreshing swim. Surrounded by lush tropical vegetation, this place connects you with the peace and beauty of local biodiversity." 
    cardImageID="f9972e59-da30-4b89-bd7a-cbb90102f2cb"
    cardImageAlt="Venture into the Ojos Indígenas Ecological Reserve" 
    ></MainContent.Card>
  

  
    <MainContent.Card
    cardTitle="Enjoy Local Cuisine" 
    cardDescription="Let your senses explore the unique flavors of Dominican cuisine at one of Punta Cana’s exclusive beach clubs. From traditional mofongo to fresh seafood prepared with a local touch, each dish will tell a culinary story. Accompany your meal with a refreshing piña colada or Dominican rum and enjoy the ocean views as the sun sets." 
    cardImageID="44fd2574-014f-4422-a435-c4b214856566"
    cardImageAlt="Gastronomía Local" 
    ></MainContent.Card>
</MainContent.Root>

<FareIntroEN.Root
destination="Punta Cana"
bookLimitDate="December 31" 
bookLimitYear="2024"
flyLimitDate="April 30"
flyLimitYear="2025"

></FareIntroEN.Root>

