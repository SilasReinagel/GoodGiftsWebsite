<script>
  export let product;
</script>

<div class="product-card">
  <img class="product-image" src={product.imageUrl} alt={product.name} />
  <div class="product-info">
    <h3 class="product-name">{product.name}</h3>
    <p class="product-price">${product.price}</p>
    {#if product.status === 'Sold Out'}
      <p class="product-status sold-out">Sold Out</p>
    {:else}
      <p class="product-status available">In Stock</p>
    {/if}
  </div>
</div>

<style>
  .product-card {
    border: 0px;
    border-radius: 4px;
    overflow: hidden;
  }

  .product-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 50%;
  }

  .product-info {
    padding: 0.5rem;
    text-align: center;
  }

  .product-name {
    margin: 0.5rem 0;
  }

  .product-price {
    margin: 0;
    font-weight: bold;
  }

  .product-status {
    margin: 0.5rem 0;
    font-size: 0.875rem;
  }

  .sold-out {
    color: #ff6b6b;
  }

  .available {
    color: #51cf66;
  }
</style>
