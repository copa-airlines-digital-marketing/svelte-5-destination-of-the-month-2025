<script lang="ts">
	import Card from "./Card.svelte";

 
</script>
<div class="container mx-auto py-8">
    <div class="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 auto-rows-auto gap-6 pt-6">
        <slot></slot>
    </div>
  </div>
