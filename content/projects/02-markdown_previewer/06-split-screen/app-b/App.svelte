<script>
  import { onMount } from 'svelte';
  import Split from 'split.js';
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });

  onMount(handleInput);

  let htmlContent;

  function handleInput() {
    htmlContent.innerHTML = marked(markdownContent);
  }

  function splitPane() {
    Split(['#editor', '#preview'], {
      direction: 'vertical',
      elementStyle: (dimension, size, gutterSize) => ({
        'flex-basis': `calc(${size}% - ${gutterSize}px)`,
      }),
      gutterStyle: (dimension, gutterSize) => ({
        'flex-basis': `${gutterSize}px`,
        background: 'gray',
        border: 'solid white',
        'border-width': '5px 5px',
      }),
      gutterSize: 2,
    });
  }

  let markdownContent = `# Learning Svelte is so cool!

## Markdown is pretty cool too!
`;
</script>

<style>
  s-panel-container {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    flex-direction: column;
  }

  textarea {
    resize: none;
    overflow: auto;
    border: none;
  }

  textarea:focus {
    border: none;
    outline: none;
  }

  :global(.gutter-vertical) {
    cursor: ns-resize;
  }
</style>

<s-panel-container use:splitPane>
  <textarea
    id="editor"
    on:keyup={handleInput}
    bind:value={markdownContent}
  />
  <div id="preview" bind:this={htmlContent} />
</s-panel-container>
