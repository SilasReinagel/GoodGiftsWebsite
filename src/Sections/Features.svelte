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
    background-image: url('/hero4.jpg');
    background-size: cover;
    background-position: center;
    flex: 1; /* Takes half the space of the container */
  }

  .benefits-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1; /* Takes the remaining half */
    background-color: #f8f8f8; /* Clean background color */
    padding: 2rem;
  }

  .benefit-card {
    width: 30%;
    padding: 2rem;
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 1rem;
  }

  .benefit-card h2 {
    margin-top: 0;
    color: #333;
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
