<script>
  import StandardPageLayout from '../Elements/StandardPageLayout.svelte';
  import Container from '../Elements/Container.svelte';
  import site from '../static-content.js';
</script>

<StandardPageLayout>
  <Container>
    <div class="success-container">
      <h1>Thank You!</h1>
      <p>Your message has been successfully sent. We'll get back to you shortly.</p>
      <div class="button-container">
        <a href="/" class="home-button">Back to Home</a>
      </div>
    </div>
  </Container>
</StandardPageLayout>

<style>
  .success-container {
    text-align: center;
    padding: 3rem 1rem;
    max-width: 600px;
    margin: 0 auto;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  h1 {
    color: var(--alternate-color);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--primary-color-light);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  .button-container {
    margin-top: 1rem;
  }
  
  .home-button {
    display: inline-block;
    background-color: #4a744c;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .home-button:hover {
    background-color: #3a5d3b;
  }
</style> 