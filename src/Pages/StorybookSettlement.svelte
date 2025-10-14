<script>
  import Container from '../Elements/Container.svelte';
  import Image from '../Elements/Image.svelte';
  import { onMount } from 'svelte';
  
  let mobileMenuOpen = false;
  let activeSection = 'about';
  let showBackToTop = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function handleScroll() {
    // Show back to top button after scrolling 300px
    showBackToTop = window.scrollY > 300;
    
    // Update active section based on scroll position
    const sections = ['about', 'sessions', 'photos', 'book', 'faq', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          activeSection = section;
          break;
        }
      }
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="storybook-page">
  <div class="top-bar">
    <div class="top-bar-content">
      <div class="top-bar-left">
        <a href="tel:+16203539735" class="phone-link">
          📞 <span class="phone-number">(620) 353-9735</span>
        </a>
        <span class="location-info">📍 Gravette, AR</span>
      </div>
      <a href="https://calendly.com/goodgiftshomestead/storybook-settlement-play-session" class="book-visit-btn" target="_blank" rel="noopener">
        Book My Visit
      </a>
    </div>
  </div>

  <header class="hero-header">
    <div class="hero-content">
      <div class="hero-left">
        <div class="business-type">Children's Indoor Playground</div>
        <img src="/sbs/SBSLogo.jpg" alt="Storybook Settlement Logo" class="logo" />
        <p class="tagline">Where imaginations grow, friendships bloom, and playtime comes to life.</p>
        <p class="subtitle">Ages 1-7 • Gravette, Arkansas • Screen-Free Play</p>
        <a href="#book" class="button button-primary button-hero">Reserve Your Spot Today</a>
      </div>
      <div class="hero-right">
        <img src="/sbs/playing-village-01.jpg" alt="Children playing in the village" class="hero-image" />
      </div>
    </div>
  </header>

  <nav class="sticky-nav" class:mobile-open={mobileMenuOpen}>
    <button class="hamburger" on:click={toggleMobileMenu} aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class:show={mobileMenuOpen}>
      <li><a href="#about" class:active={activeSection === 'about'} on:click={() => mobileMenuOpen = false}>About</a></li>
      <li><a href="#sessions" class:active={activeSection === 'sessions'} on:click={() => mobileMenuOpen = false}>Sessions</a></li>
      <li><a href="#photos" class:active={activeSection === 'photos'} on:click={() => mobileMenuOpen = false}>Gallery</a></li>
      <li><a href="#book" class:active={activeSection === 'book'} on:click={() => mobileMenuOpen = false}>Book</a></li>
      <li><a href="#faq" class:active={activeSection === 'faq'} on:click={() => mobileMenuOpen = false}>FAQ</a></li>
      <li><a href="#contact" class:active={activeSection === 'contact'} on:click={() => mobileMenuOpen = false}>Contact</a></li>
    </ul>
  </nav>

  <Container>
    <section id="about">
      <h2>Welcome to Storybook Settlement</h2>
      <p class="lead">
        Nestled in the countryside near Gravette, Arkansas, <strong>Storybook Settlement is a children's indoor playground</strong> — a handcrafted play village designed for screen-free, imaginative fun. With themed storefronts that rotate seasonally, your children can explore, pretend, and create in a safe and engaging environment. It's a place where families connect and creativity takes the lead.
      </p>
    </section>

    <section id="sessions">
      <h2>Sessions & Pricing</h2>
      <ul class="info-list">
        <li><strong>Play Sessions:</strong> Tuesday - 10:00-11:30am, Friday - 3:30-5:00pm</li>
        <li><strong>Age Range:</strong> Ideal for ages 1–7 (siblings welcome)</li>
        <li><strong>Cost:</strong> $5 per child, $15 max per family (infants under 12 months are free with siblings)</li>
        <li><strong>Max Capacity:</strong> 10 children per session</li>
      </ul>
      <div class="scarcity-notice">
        ⚠️ <strong>Limited Availability:</strong> Only 10 spots per session - Book early to secure your spot!
      </div>
      <div class="cta-inline">
        <a href="https://calendly.com/goodgiftshomestead/storybook-settlement-play-session" class="button button-primary" target="_blank" rel="noopener">Book Your Session Now</a>
      </div>
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
          <Image src="/sbs/fire-station-01.jpg" alt="Fire Station storefront" width={400} />
        </div>
        <div class="gallery-item">
          <Image src="/sbs/ice-cream-01.jpg" alt="Ice Cream Parlor storefront" width={400} />
        </div>
        <div class="gallery-item">
          <Image src="/sbs/vet-01.jpeg" alt="Animal Hospital storefront" width={400} />
        </div>
        <div class="gallery-item">
          <Image src="/sbs/police-station-01.jpg" alt="Police Station storefront" width={400} />
        </div>
      </div>
    </section>

    <section id="book" class="book-section">
      <h2>Book a Session</h2>
      <p>
        Click the button below to reserve your child's spot through our online booking system. Each child attending must have their own booking submission.
      </p>
      <div class="scarcity-notice">
        ⏰ <strong>Reserve Early:</strong> Sessions fill quickly! Only 10 children per session.
      </div>
      <div class="cta-center">
        <a href="https://calendly.com/goodgiftshomestead/storybook-settlement-play-session" class="button button-primary button-large" target="_blank" rel="noopener">Book Now</a>
      </div>
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

  {#if showBackToTop}
    <button class="back-to-top" on:click={scrollToTop} aria-label="Back to top">
      ↑
    </button>
  {/if}

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

  /* Top Bar */
  .top-bar {
    background: linear-gradient(135deg, #d65a31 0%, #bf4a21 100%);
    padding: 0.75rem 2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    position: sticky;
    top: 0;
    z-index: 1001;
  }

  .top-bar-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }

  .top-bar-left {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .phone-link {
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .phone-link:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  .phone-number {
    font-family: 'Quicksand', sans-serif;
  }

  .location-info {
    color: white;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    white-space: nowrap;
  }

  .book-visit-btn {
    background-color: white;
    color: #d65a31;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.15rem;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .book-visit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.3);
    background-color: #fff9f4;
  }

  @media (max-width: 768px) {
    .top-bar-left {
      gap: 1rem;
      font-size: 0.95rem;
    }

    .location-info {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 640px) {
    .top-bar {
      padding: 0.75rem 1rem;
    }

    .top-bar-content {
      flex-direction: column;
      gap: 0.75rem;
    }

    .top-bar-left {
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      width: 100%;
    }

    .phone-link {
      font-size: 1rem;
    }

    .location-info {
      font-size: 0.9rem;
    }

    .book-visit-btn {
      padding: 0.65rem 1.5rem;
      font-size: 1rem;
      width: 100%;
      text-align: center;
    }
  }
  
  /* Hero Header */
  .hero-header {
    background-color: #e2d1b3;
    padding: 2rem;
    border-bottom: 4px dashed #ff9f9f;
    min-height: calc(100vh - 80px);
    max-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-content {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .hero-left {
    text-align: center;
  }

  .business-type {
    display: inline-block;
    background-color: #d65a31;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 8px rgba(214, 90, 49, 0.3);
  }
  
  .logo {
    width: 240px;
    max-width: 90%;
    height: auto;
    margin-bottom: 1.5rem;
    animation: fadeIn 1s ease-in;
  }
  
  .tagline {
    font-size: 1.3rem;
    font-style: italic;
    color: #5a3d2f;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 600;
    color: #d65a31;
    margin-bottom: 1.5rem;
  }

  .hero-right {
    margin-top: 2rem;
  }

  .hero-image {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(0,0,0,0.25);
  }

  .button-hero {
    margin-top: 0.5rem;
  }

  /* Desktop Hero Layout - Side by Side */
  @media (min-width: 1024px) {
    .hero-header {
      padding: 3rem 2rem;
    }

    .hero-content {
      display: flex;
      align-items: center;
      gap: 4rem;
    }

    .hero-left {
      flex: 1;
      text-align: left;
      max-width: 550px;
    }

    .hero-right {
      flex: 1;
      margin-top: 0;
    }

    .business-type {
      font-size: 1rem;
      padding: 0.6rem 1.75rem;
      margin-bottom: 2rem;
    }

    .logo {
      width: 280px;
      margin-bottom: 2rem;
    }

    .tagline {
      font-size: 1.8rem;
      margin-bottom: 1.25rem;
    }

    .subtitle {
      font-size: 1.15rem;
      margin-bottom: 2rem;
    }

    .hero-image {
      border-radius: 20px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.3);
    }
  }

  @media (min-width: 1400px) {
    .hero-left {
      max-width: 600px;
    }

    .logo {
      width: 320px;
    }

    .tagline {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.25rem;
    }
  }

  /* Sticky Navigation */
  .sticky-nav {
    position: sticky;
    top: 56px;
    background-color: #e2d1b3;
    border-bottom: 3px solid #ff9f9f;
    z-index: 999;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  @media (max-width: 640px) {
    .sticky-nav {
      top: 140px;
    }
  }
  
  .sticky-nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 1rem 0;
    margin: 0;
    transition: all 0.3s ease;
  }
  
  .sticky-nav li {
    margin: 0 1.5rem;
  }
  
  .sticky-nav a {
    color: #d65a31;
    text-decoration: none;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
  }

  .sticky-nav a:hover {
    background-color: rgba(253, 139, 113, 0.2);
  }

  .sticky-nav a.active {
    background-color: #fd8b71;
    color: white;
  }

  .sticky-nav a:focus {
    outline: 2px solid #d65a31;
    outline-offset: 2px;
  }

  /* Hamburger Menu */
  .hamburger {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 1rem;
    z-index: 1001;
  }

  .hamburger span {
    width: 25px;
    height: 3px;
    background-color: #d65a31;
    margin: 3px 0;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    .sticky-nav ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #e2d1b3;
      padding: 1rem 0;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .sticky-nav ul.show {
      display: flex;
    }

    .sticky-nav li {
      margin: 0.5rem 0;
    }

    .sticky-nav a {
      display: block;
      padding: 1rem;
    }
  }
  
  /* Sections */
  section {
    padding: 3rem 2rem;
    animation: fadeIn 0.8s ease-in;
  }

  section:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.4);
  }
  
  h2 {
    font-family: 'Merriweather', serif;
    color: #bf6a40;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-family: 'Merriweather', serif;
    color: #bf6a40;
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }

  .lead {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #3b2e2a;
  }
  
  ul {
    padding-left: 1.5rem;
  }

  .info-list {
    font-size: 1.05rem;
    line-height: 2;
  }

  /* Contact Links */
  #contact a {
    color: #2d1810;
    font-weight: 600;
    text-decoration: underline;
  }

  #contact a:hover {
    color: #d65a31;
  }

  /* Buttons */
  .button {
    background-color: #fd8b71;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 12px;
    font-size: 1.15rem;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(253, 139, 113, 0.4);
    transition: all 0.3s ease;
    display: inline-block;
    cursor: pointer;
  }
  
  .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(253, 139, 113, 0.5);
    background-color: #ff7557;
  }

  .button:focus {
    outline: 3px solid #d65a31;
    outline-offset: 3px;
  }

  .button-primary {
    background-color: #d65a31;
    font-size: 1.2rem;
  }

  .button-primary:hover {
    background-color: #bf4a21;
  }

  .button-large {
    padding: 1.25rem 3rem;
    font-size: 1.4rem;
  }

  .cta-inline {
    margin: 2rem 0;
  }

  .cta-center {
    text-align: center;
    margin: 2.5rem 0;
  }

  /* Scarcity Notice */
  .scarcity-notice {
    background-color: #fff5e6;
    border-left: 4px solid #ff9f9f;
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
    border-radius: 8px;
    font-size: 1.05rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .book-section {
    background: linear-gradient(135deg, rgba(253, 139, 113, 0.1), rgba(242, 215, 182, 0.2));
    border-radius: 16px;
    padding: 3rem;
    text-align: center;
  }
  
  /* Gallery */
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
    padding: 1rem 0;
  }

  .gallery-item {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
  }

  .gallery-item:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .gallery-item :global(img) {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }

  .gallery-item:hover :global(img) {
    transform: scale(1.05);
  }

  /* Back to Top Button */
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #d65a31;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    z-index: 999;
    animation: fadeIn 0.3s ease-in;
  }

  .back-to-top:hover {
    background-color: #bf4a21;
    transform: translateY(-4px);
  }

  .back-to-top:focus {
    outline: 3px solid #d65a31;
    outline-offset: 3px;
  }
    
  /* Footer */
  footer {
    text-align: center;
    background-color: #f2d7b6;
    padding: 2rem;
    margin-top: 3rem;
    border-top: 4px dashed #ff9f9f;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    section {
      padding: 2rem 1rem;
    }

    .button-large {
      padding: 1rem 2rem;
      font-size: 1.2rem;
    }

    .book-section {
      padding: 2rem 1.5rem;
    }

    .back-to-top {
      bottom: 1rem;
      right: 1rem;
      width: 45px;
      height: 45px;
    }
  }

  @media (max-width: 480px) {
    .tagline {
      font-size: 1.1rem;
    }

    .subtitle {
      font-size: 0.9rem;
    }

    h2 {
      font-size: 1.75rem;
    }
  }
</style>

