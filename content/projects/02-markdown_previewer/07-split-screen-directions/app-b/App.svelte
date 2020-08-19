<script>
  import { onMount } from 'svelte';
  import Split from 'split.js';
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });

  onMount(handleInput);

  let htmlContent;
  let containerWidth;
  let splitInstance;

  function handleInput() {
    htmlContent.innerHTML = marked(markdownContent);
  }

  function splitPane(node, direction) {
    function split(direction) {
      splitInstance = Split(['#editor', '#preview'], {
        direction: containerWidth > 600 ? 'horizontal' : 'vertical',
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
    split(direction);

    return {
      update() {
        splitInstance.destroy();
        split(direction);
      },
    };
  }

  let markdownContent = `# Learning Svelte is so cool!

## Markdown is pretty cool too!
### And here's some things you can do with Markdown: 
`;
</script>

<style>
  s-panel-container {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    flex-direction: var(--orientation);
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

  :global(.gutter-horizontal) {
    cursor: ew-resize;
  }
</style>

<s-panel-container
  style="--orientation: {containerWidth > 600 ? 'row' : 'column'}"
  bind:clientWidth={containerWidth}
  use:splitPane={containerWidth > 600 ? 'horizontal' : 'vertical'}
>
  <textarea
    id="editor"
    on:keyup={handleInput}
    bind:value={markdownContent}
  />
  <div id="preview" bind:this={htmlContent} />
</s-panel-container>
