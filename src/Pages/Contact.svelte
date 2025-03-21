<script>
  import StandardPageLayout from '../Elements/StandardPageLayout.svelte';
  import Container from '../Elements/Container.svelte';
  import site from '../static-content.js';
  
  // Use site from import instead of relying on prop passing through slots
  const company = site;
</script>

<StandardPageLayout>
  <Container>
    <div class="full-height column">
      <form class="email-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
        <input type="hidden" name="form-name" value="contact" />
        <h2 class="center">Contact Us</h2>
        <hr/>
        <div class="hidden">
          <input name="bot-field" />
        </div>
        <div class="form-field">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required/>
        </div>
        <div class="form-field">
          <label for="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email Address" required/>
        </div>
        <div class="form-field">
          <label for="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </Container>
</StandardPageLayout>

<style>
  h2, h3 {
    color: var(--alternate-color);
  }

  p {
    color: var(--primary-color-light);
    font-size: 1.1em;
    line-height: 1.2em;
  }

  .email-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .address {
    margin-right: 4em;
    margin-bottom: 2em;
  }

  hr {
    vertical-align: middle;
    border-bottom: 2px solid #c7a17a;
    margin: 0 0 1.5em 0;
    width: 100%
  }

  input {
    padding: 1em;
    margin: 0.5em 0 1em 0;
    width: 100%;
  }

  label {
    color: var(--primary-color);
    font-weight: 500;
  }

  .form-field {
    margin-bottom: 0.5em;
  }

  ::placeholder {
    color: var(--primary-color);
    opacity: 0.6;
  }

  button {
    padding: 1em;
    margin: 1em 25%;
    font-size: 1.2em;
    width: 50%;
    background-color: #4a744c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #3a5d3b;
  }

  textarea {
    padding: 1em;
    margin: 0.5em 0 1em 0;
    min-height: 12em;
    width: 100%;
  }

  .column {
    max-width: 80vw;
    width: 640px;
    display: flex;
    flex-direction: column;
    margin: 0px 2em;
  }

  .full-height {
    min-height: 100vh;
  }

  .hidden {
    display: none;
  }
</style>
