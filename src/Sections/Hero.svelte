<script>
  import Container from '../Elements/Container.svelte';
  import company from '../static-content.js';
</script>

<div class="hero-section" role="banner">
  <Container>
    <div class="width-limit">
      <h1 class="hero-title mb6">{company.slogan}</h1>
      <button class="hero-cta">Embrace Wholesome Goodness</button>
    </div>
  </Container>
</div>

<style>
  .hero-section {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    height: calc(100vh - 160px);
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('/hero2.webp');
    background-size: cover;
    background-position: center;
    text-align: center;
    color: white;
  }

  .hero-title {
    color: var(--secondary-color);
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 6rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 2;
  }

  .hero-cta {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    color: #fff;
    background-color: var(--alternate-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 2;
  }

  .hero-cta:hover {
    background-color: var(--alternate-color-light);
  }

  .width-limit {
    max-width: 1000px;
    margin-right: 32px;
    margin-left: 32px;
  }
</style>
