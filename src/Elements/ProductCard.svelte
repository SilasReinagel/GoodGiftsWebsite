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
    {:else if product.status === 'New'}
      <p class="product-status new">New!</p>
    {:else}
      <p class="product-status available">In Stock</p>
    {/if}
    
    {#if product.detailsPage}
      <a href={product.detailsPage} class="details-link">Learn More</a>
    {/if}
  </div>
</div>

<style>
  .product-card {
    border: 0px;
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
    font-weight: bold;
  }

  .sold-out {
    color: #ff6b6b;
  }

  .available {
    color: #51cf66;
  }
  
  .new {
    color: #339af0;
  }
  
  .details-link {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.25rem 0.75rem;
    background-color: #4a744c;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.875rem;
    transition: background-color 0.3s;
  }
  
  .details-link:hover {
    background-color: #3a5d3b;
  }
</style>
