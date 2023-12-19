<script>
  export let id = '';
</script>

<div id={id}>
  <slot>Content goes here.</slot>
</div>

<style>
  div {
    max-width: 80em;
    margin: 0 auto;
  }
 </style>
 