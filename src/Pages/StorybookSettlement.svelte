<script>
  import Container from '../Elements/Container.svelte';
    import Image from '../Elements/Image.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="storybook-page">
  <header>
    <img src="/sbs/SBSLogo.jpg" alt="Storybook Settlement Logo" class="logo" />
    <p class="tagline">Where imaginations grow, friendships bloom, and playtime comes to life.</p>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#sessions">Sessions</a></li>
        <li><a href="#photos">Gallery</a></li>
        <li><a href="#book">Book</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <Container>
    <section id="about">
      <h2>Welcome to Storybook Settlement</h2>
      <p>
        Nestled in the countryside near Gravette, Arkansas, Storybook Settlement is a handcrafted indoor play village designed for screen-free, imaginative fun. With themed storefronts that rotate seasonally, your children can explore, pretend, and create in a safe and engaging environment. It's a place where families connect and creativity takes the lead.
      </p>
      <img src="/sbs/playing-village-01.jpg" alt="Children playing in the village" style="border-radius:12px; max-width:600px;">
    </section>

    <section id="sessions">
      <h2>Sessions & Pricing</h2>
      <ul>
        <li><strong>Play Sessions:</strong> Tuesday - 10:00-11:30am, Friday - 3:30-5:00pm</li>
        <li><strong>Age Range:</strong> Ideal for ages 1–7 (siblings welcome)</li>
        <li><strong>Cost:</strong> $5 per child, $15 max per family (infants under 12 months are free with siblings)</li>
        <li><strong>Max Capacity:</strong> 10 children per session</li>
      </ul>
      <p>
        Reserve your spot in advance to ensure availability.
      </p>
    </section>

    <section id="photos">
      <h2>Peek Inside</h2>
      <p>A rotating storybook village featuring:</p>
      <ul>
        <li>🚒 Fire Station</li>
        <li>🍦 Ice Cream Parlor</li>
        <li>🏦 Bank</li>
        <li>🏠 House & Garden</li>
        <li>🐾 Animal Hospital</li>
        <li>👮🏼‍♀️ Police Station</li>
      </ul>
      <div class="gallery">
        <div class="gallery-item">
          <Image src="/sbs/fire-station-01.jpg" alt="Fire Station storefront" />
        </div>
        <div class="gallery-item">
          <Image src="/sbs/ice-cream-01.jpg" alt="Ice Cream Parlor storefront" />
        </div>
        <div class="gallery-item">
          <Image src="/sbs/vet-01.jpeg" alt="Animal Hospital storefront" />
        </div>
        <div class="gallery-item">
          <Image src="/sbs/police-station-01.jpg" alt="Police Station storefront" />
        </div>
      </div>
    </section>

    <section id="book">
      <h2>Book a Session</h2>
      <p>
        Click the button below to reserve your child's spot through our online booking system. Each child attending must have their own booking submission.
      </p>
      <p><a href="https://calendly.com/goodgiftshomestead/storybook-settlement-play-session" class="button" target="_blank" rel="noopener">Book Now</a></p>
    </section>

    <section id="faq">
      <h2>FAQ</h2>
      <h3>Do I stay with my child?</h3>
      <p>Yes, a parent or guardian must remain on site during the entire session.</p>

      <h3>What is your cleaning policy?</h3>
      <p>All surfaces and toys are sanitized between sessions. We keep the space fresh, safe, and tidy.</p>

      <h3>Can I bring snacks?</h3>
      <p>Yes, we welcome water and snacks. Please enjoy them in the designated eating area.</p>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <p>Have questions? Interested in a private event or birthday party?</p>
      <ul>
        <li>Email: <a href="mailto:goodgiftshomestead@gmail.com">goodgiftshomestead@gmail.com</a></li>
        <li>Location: Gravette, Arkansas (Address shared upon booking)</li>
      </ul>
    </section>
  </Container>

  <footer>
    <p>&copy; 2025 Storybook Settlement. A branch of Good Gifts Homestead.</p>
  </footer>
</div>

<style>
  .storybook-page {
    font-family: 'Quicksand', 'Segoe UI', sans-serif;
    background: linear-gradient(to bottom right, #fff9f4, #fce5dc);
    color: #3b2e2a;
    min-height: 100vh;
  }
  
  header {
    background-color: #e2d1b3;
    padding: 2rem;
    text-align: center;
    border-bottom: 4px dashed #ff9f9f;
  }
  
  .logo {
    width: 300px;
    max-width: 90%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  .tagline {
    font-size: 1.2rem;
    font-style: italic;
    color: #6b4c3b;
  }
  
  nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
  }
  
  nav li {
    margin: 0 1rem;
  }
  
  nav a {
    color: #d65a31;
    text-decoration: none;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
  }
  
  section {
    padding: 2rem;
  }
  
  h2 {
    font-family: 'Merriweather', serif;
    color: #bf6a40;
    font-size: 2rem;
  }
  
  ul {
    padding-left: 1.5rem;
  }
  
  .button {
    background-color: #fd8b71;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    text-decoration: none;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    transition: transform 0.2s ease;
    display: inline-block;
  }
  
  .button:hover {
    transform: scale(1.05);
  }
  
  .gallery {
    column-count: 4;
    column-gap: 1rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 1200px) {
    .gallery {
      column-count: 3;
    }
  }

  @media (max-width: 768px) {
    .gallery {
      column-count: 2;
    }
  }

  @media (max-width: 480px) {
    .gallery {
      column-count: 1;
    }
  }

  .gallery-item {
    break-inside: avoid;
    margin-bottom: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .gallery-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  .gallery-item :global(img) {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
  }
    
  footer {
    text-align: center;
    background-color: #f2d7b6;
    padding: 1rem;
    margin-top: 2rem;
  }
</style>

