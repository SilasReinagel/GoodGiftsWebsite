<script>
  export let src = '';
  export let alt = '';
  export let width;
  export let height = 'auto';
  export let rounded = true;
  export let style = '';
  export let className = '';

  let computedStyle = style;
  $: computedStyle =
    (width ? `max-width: ${width}px; ` : '') +
    (rounded ? 'border-radius: 12px; ' : '') +
    (style ? style : '');
</script>

<img
  src={src}
  alt={alt}
  {width}
  {height}
  style={computedStyle}
  class={className}
/>
