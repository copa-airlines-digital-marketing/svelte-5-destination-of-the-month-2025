<script>
    import * as MainHeader from "$lib/components/ui/MainTitle";
    import * as MainImage from "$lib/components/ui/Image";
    import * as MainIntro from "$lib/components/ui/Intro";
    import * as MainContent from "$lib/components/ui/Content";
	import * as FareIntro from "$lib/components/ui/ESFareIntro";
</script>


<MainHeader.Root >
   <MainHeader.BreadcrumbsES></MainHeader.BreadcrumbsES>
   <MainHeader.MainLogo dLogoID='07b36fcf-a95d-4202-bb77-4866823c42aa'></MainHeader.MainLogo>
</MainHeader.Root>

<MainImage.Root mainImageID="c3c1b68c-17f7-4dcf-a051-fb0db8a653f3" ></MainImage.Root>

<MainIntro.Root 
introTitle="Descubre el encanto de Cartagena" 
introDescription="Esta histórica ciudad colombiana combina una rica herencia cultural, playas doradas y una vibrante vida nocturna. En Cartagena, cada rincón cuenta una historia, desde las calles empedradas de su Ciudad Amurallada hasta los paisajes paradisíacos de las Islas del Rosario" 
introBookURL="https://www.google.com"
introBookCTA="Reserva ya"
></MainIntro.Root>

<MainContent.Root>
    <MainContent.Card
    cardTitle="Relájate bajo el sol caribeño" 
    cardDescription="Cartagena es conocida por sus playas, donde el sol y el mar se unen para crear un ambiente perfecto para descansar. La playa de Bocagrande ofrece un entorno animado y cómodo, ideal para familias y amigos. Para quienes buscan algo más exclusivo, las Islas del Rosario y Barú, con arenas blancas y aguas cristalinas, son una opción inigualable. Allí, Playa Blanca se destaca por su serenidad y belleza, invitando a disfrutar de un día de relajación con una deliciosa limonada de coco en mano." 
    cardImageID="34733aa0-234f-4f9c-a513-d70b4adc2587"
    cardImageAlt="Relájate bajo el sol caribeño" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Vive una aventura tropical" 
    cardDescription="Cartagena también es un destino para los aventureros. Deportes acuáticos como el kayak, el snorkel y el paddleboard son populares en la región. Además, la zona ofrece la oportunidad de bucear entre arrecifes de coral y descubrir la vida marina del Caribe colombiano. Si prefieres mantener los pies en la tierra, un recorrido por el Volcán del Totumo te permitirá bañarte en lodo volcánico, una experiencia divertida y única." 
    cardImageID="2706208c-a0ae-4dc6-9be8-9c873674b5d7"
    cardImageAlt="Vive una aventura tropical" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Siente el ritmo de la ciudad" 
    cardDescription="La Ciudad Amurallada de Cartagena es un tesoro histórico lleno de encanto. Sus calles empedradas, balcones floridos y plazas coloniales invitan a perderse en un viaje al pasado. Pasea por el emblemático barrio de San Diego, visita la Torre del Reloj y déjate maravillar por la arquitectura de iglesias como la Catedral de Santa Catalina de Alejandría. No puedes dejar de recorrer las murallas que protegieron la ciudad de piratas y ataques, ofreciendo vistas espectaculares del mar Caribe. Cada rincón está lleno de historia y romance, ideal para fotos inolvidables y momentos únicos." 
    cardImageID="07b24005-136c-456e-86dd-acfcf7f50511"
    cardImageAlt="Reserva Ecológica Ojos Indígenas" 
    ></MainContent.Card>
  
    <MainContent.Card
    cardTitle="Deléitate con los sabores cartageneros" 
    cardDescription="La cocina cartagenera es una fusión de tradiciones africanas, indígenas y españolas que deleita a los paladares más exigentes. Prueba delicias locales como las arepas de huevo, las carimañolas o el arroz con coco acompañado de pescado frito. Para algo más especial, un plato de mote de queso o cazuela de mariscos será inolvidable. No olvides refrescarte con una limonada de panela o un coctel de corozo para completar la experiencia." 
    cardImageID="1da0f2ef-d267-4aaa-bf3a-06a6697de6aa"
    cardImageAlt="Deléitate con los sabores cartageneros" 
    ></MainContent.Card>
</MainContent.Root>

<FareIntro.Root
destination="Cartagena"
bookLimitDate="31 de enero" 
bookLimitYear="2025"
flyLimitDate="31 de mayo"
flyLimitYear="2025"

></FareIntro.Root>



