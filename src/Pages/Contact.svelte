<script>
  export let company;

  import StandardPageLayout from '../Elements/StandardPageLayout.svelte';
  import Container from '../Elements/Container.svelte';
</script>

<StandardPageLayout>
  <Container>
    <div class="full-height column">
      <form class="email-form" name="contact" form-name="contact" method="POST" data-netlify="true">
        <h2 class="center">Contact Us</h2>
        <hr/>
        <input type="text" name="name" placeholder="Your Name"/>
        <input type="email" name="email" placeholder="Your Email Address"/>
        <textarea name="message" placeholder="Your Message"/>
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
    margin: 1em 0;
  }

  ::placeholder {
    color: var(--primary-color);
    opacity: 1;
  }

  button {
    padding: 1em;
    margin: 1em 25%;
    font-size: 1.2em;
    width: 50%;
  }

  textarea {
    padding: 1em;
    margin: 1em 0;
    min-height: 12em;
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
</style>
