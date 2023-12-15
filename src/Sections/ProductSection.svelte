<script>
  import Container from "../Elements/Container.svelte";
import ProductCard from "../Elements/ProductCard.svelte";

  import { products } from "../static-content";
</script>

<Container>
  <div>
    <h1 class="center mt4">Products</h1>
  </div>
  <section class="product-section">
    {#each products as product}
      <ProductCard {product} />
    {/each}
  </section>
</Container>

<style>
  h1 {
    text-align: center;
    color: var(--alternate-color);
  }

  .product-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 2rem;
    min-height: 100vh;
    align-items: start; /* Align items at the start of the grid area */
    padding: 2rem;
  }
</style>
