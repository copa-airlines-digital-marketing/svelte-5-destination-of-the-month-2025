<script>
	import { getTypography } from "$lib/components/foundations/typography";
    const breadcrumbItems = [
    { title: 'Inicio', href: 'https://www.copaair.com/es/vuelos' },
    { title: 'Promociones', href: 'https://www.copaair.com/es/vuelos-promociones' },
 
  ];

</script>



<div class="col-start-2 col-end-2 row-start-2 row-end-2">
    <nav aria-label="Breadcrumb ">
      <ol class="flex gap-2 items-center">
        {#each breadcrumbItems as item, index}
          <li class="">
            <a href={item.href} class={getTypography('body','link', 'text-gray-50')}>{item.title}</a>
          </li>
          {#if index < breadcrumbItems.length - 1}
            <li class={getTypography('body','link', 'text-gray-50')} >&rsaquo;</li>
          {/if}
        {/each}
        <li class={getTypography('body','link', 'text-gray-50')} >&rsaquo;</li> </ol>
    </nav>
  </div>