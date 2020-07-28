<script>
  import marked from 'marked';
  let markdown = '# Marked in browser\n\nRendered by **marked**.';
  $: content = marked(markdown);
</script>

<textarea id="editor" bind:value={markdown} />
<div id="preview">
  {@html content}
</div>
