<script>
  let sidebarOpen = false;

  import HamburgerIcon from '../Elements/HamburgerIcon.svelte';
  import SiteSidebar from './SiteSidebar.svelte';

  import company, { pages } from '../static-content.js';
</script>

<header class="px2">
  <div class="icon-spacer small-screen-only">
  </div>
  <div class="column">
    <a href="." class="logo mb1">
      <div class="logo-img">
        <img src={company.logo} alt="Logo"/>
      </div>
      <!-- <h1>{company.name}</h1> -->
    </a>
    <nav class="navbar tablet-hidden">
      {#each pages as page}
        {#if page.showInMainNav !== false}
          <a class="navlink decor-font" href={page.href}>{page.name}</a>
        {/if}
      {/each}
    </nav>
  </div>
  <SiteSidebar bind:open={sidebarOpen}/>
  <HamburgerIcon bind:open={sidebarOpen}/>
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    background-color: var(--header-background-color);
    height: 160px;
    padding: 0 0 16px 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  h1 {
    color: var(--header-color);
    margin: 10px;
  }

  .logo {
    display: flex;
    flex-direction: row;
    max-height: 100px;
  }

  .logo-img {
    width: 100px;
  }

  .icon-spacer {
    min-width: 40px;
    min-height: 24px;
  }

  .navlink {
    color: var(--header-color);
    margin: 5px 15px;
    font-size: 1.1em;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition-duration: 0.2s;
  }

  .navlink:hover {
    color: var(--header-color-hover);
  }

</style>
