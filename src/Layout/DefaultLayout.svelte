<script>
  export let company;

  import SiteFooter from './SiteFooter.svelte';
  import CompanyFooter from './CompanyFooter.svelte';
  import SiteHeader from './SiteHeader.svelte';
</script>

<style>
  section {
    min-height: 80vh;
  }
</style>

<SiteHeader/>
<section>
  <slot />
</section>
<SiteFooter {company} />

