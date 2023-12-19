<!-- BenefitsSection.svelte -->
<script>
  // Any script logic can be placed here
</script>

<section class="benefits-container">
  <div class="image-container">
    <!-- The image will cover the top half of the section -->
  </div>
  <div class="benefits-section">
    <div class="benefit-card">
      <h2>Live Longer</h2>
      <p>Join the journey to longevity with our pure, nutrient-rich foods, designed to promote a healthier, longer life.</p>
    </div>
    <div class="benefit-card">
      <h2>Improve Your Health</h2>
      <p>Revitalize your wellness and heal disease with our clean, unprocessed products—nothing artificial, just nature’s best.</p>
    </div>
    <div class="benefit-card">
      <h2>Aesthetic Delight</h2>
      <p>Indulge in the beauty of eating well. Our handcrafted goods are a feast for the eyes and a celebration for the palate.</p>
    </div>
  </div>
</section>

<style>
  .benefits-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .image-container {
    background-image:     
      linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, #f3eede 100%), 
      url('/hero4.jpg');
    background-size: cover;
    background-position: center;
    height: 50vh;
  }

  .benefits-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--primary-background-color);
    padding: 2rem;
    min-height: 50vh;
    overflow: hidden;
  }

  .benefit-card {
    width: 30%;
    padding: 2rem;
    text-align: center;
    border-radius: 8px;
    margin: 1rem;
  }

  .benefit-card h2 {
    margin-top: 0;
    color: var(--alternate-color);
  }

  .benefit-card p {
    color: #666;
  }

  /* Responsive design adjustments */
  @media (max-width: 768px) {
    .benefits-section {
      flex-direction: column;
    }

    .benefit-card {
      width: 80%;
      margin-bottom: 1rem;
    }
  }
</style>
