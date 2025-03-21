<script>
  import site from '../static-content.js';
  import StandardPageLayout from '../Elements/StandardPageLayout.svelte';
  import Container from '../Elements/Container.svelte';
</script>

<StandardPageLayout>
  <Container>
    <div class="container">
      <div class="product-details">
        <h1>Artisanal Einkorn Sourdough Boule with Whey</h1>
        
        <div class="product-content">
          <div class="product-image">
            <img src="/sourdough.jpg" alt="Artisanal Einkorn Sourdough Boule with Whey" />
          </div>
          
          <div class="product-description">
            <p>Delight in the nourishing taste of our Artisanal Einkorn Sourdough Boule, now enriched with the added goodness of whey. Handcrafted using 100% organic Einkorn flour, the world's most ancient wheat, and slowly fermented with a natural sourdough starter, this bread offers a unique combination of flavor, texture, and nutrition. The use of whey enhances the natural tang of the sourdough while providing additional protein and nutrients, making each bite even more satisfying.</p>

            <p>With its crisp, golden crust and soft, airy crumb, this boule is perfect for everyday meals, whether you're making sandwiches, toast, or enjoying it with butter. The use of whey creates an extra light texture and boosts the bread's digestibility, making it a wholesome addition to any table.</p>

            <h2>Why Einkorn and Whey?</h2>

            <p>Einkorn is an ancient grain celebrated for its rich nutrient profile and lower gluten content, while whey brings an extra layer of nutrition with its high protein and essential minerals. This combination results in a bread that's not only delicious but also more nourishing than your typical loaf.</p>

            <p><strong>Ingredients:</strong> Organic Einkorn flour, whey, sea salt, natural sourdough starter.</p>

            <h3>Highlights:</h3>
            <ul>
              <li>Made with 100% organic Einkorn flour and whey</li>
              <li>Naturally leavened with a traditional sourdough starter</li>
              <li>Whey adds protein, nutrients, and a light texture</li>
              <li>Lower gluten content for easier digestion</li>
              <li>No artificial additives or preservatives</li>
            </ul>

            <p>Savor the timeless tradition of artisanal bread-making with this nutrient-packed, flavorful loaf.</p>
            
            <div class="cta-container">
              <a href="/contact" class="cta-button">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</StandardPageLayout>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .product-details {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  h1 {
    color: #3a3a3a;
    text-align: center;
    padding: 1.5rem;
    margin: 0;
    border-bottom: 1px solid #eee;
  }
  
  .product-content {
    display: flex;
    flex-direction: column;
  }
  
  @media (min-width: 768px) {
    .product-content {
      flex-direction: row;
    }
  }
  
  .product-image {
    flex: 1;
    padding: 1.5rem;
  }
  
  .product-image img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-description {
    flex: 2;
    padding: 1.5rem;
  }
  
  .product-description p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #555;
  }
  
  .product-description h2 {
    color: #3a3a3a;
    margin: 1.5rem 0 1rem;
  }
  
  .product-description h3 {
    color: #3a3a3a;
    margin: 1.5rem 0 1rem;
  }
  
  .product-description ul {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .product-description li {
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  .cta-container {
    text-align: center;
    margin-top: 2rem;
  }
  
  .cta-button {
    display: inline-block;
    background-color: #4a744c;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #3a5d3b;
  }
</style>