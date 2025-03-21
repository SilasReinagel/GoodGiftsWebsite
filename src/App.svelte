<script>
	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import { pages } from './static-content.js';

  // Get the current path from the URL
  const currentPath = window.location.pathname;
  
  // Find matching route in pages array
  const matchingRoutes = pages.filter(r => r.path === currentPath);
  
  // Default to home page if no route matches
  const component = matchingRoutes.length > 0 ? matchingRoutes[0].component : pages[0].component;
  const pageName = matchingRoutes.length > 0 ? matchingRoutes[0].name : pages[0].name;
</script>

<main>
	<DefaultLayout>
		<svelte:component this={component}/>
	</DefaultLayout>
</main>

<style>
main {
	width: 100%;
}
</style>  
 