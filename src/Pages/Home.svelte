<script>
  import Features from '../Sections/Features.svelte';
  import Hero from '../Sections/Hero.svelte';
  import ProductSection from '../Sections/ProductSection.svelte';

  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }
</script>

<Hero ctaAction={scrollToProducts}/>
<Features />
<ProductSection />
