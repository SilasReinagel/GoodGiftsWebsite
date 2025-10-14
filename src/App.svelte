<script>
	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import { pages } from './static-content.js';
	import site from './static-content.js';

  // Get the current path from the URL
  const currentPath = window.location.pathname;
  
  // Find matching route in pages array
  const matchingRoutes = pages.filter(r => r.path === currentPath);
  
  // Default to home page if no route matches
  const currentRoute = matchingRoutes.length > 0 ? matchingRoutes[0] : pages[0];
  const component = currentRoute.component;
  const pageName = currentRoute.name;
  const useLayout = currentRoute.useLayout !== false; // Default to true if not specified
</script>

<main>
	{#if useLayout}
		<DefaultLayout company={site}>
			<svelte:component this={component}/>
		</DefaultLayout>
	{:else}
		<svelte:component this={component}/>
	{/if}
</main>

<style>
main {
	width: 100%;
}
</style>  
 