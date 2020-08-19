---
title: Horizontal/Vertical Split Screen
---
First, let's shorten up that `markdownContent`, and get rid of the `<svelte:head>`

```html
<script>
  import { onMount } from 'svelte';
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });

  onMount(handleInput);

  function handleInput() {
    htmlContent.innerHTML = marked(markdownContent);
  }

  let htmlContent;

  let markdownContent = `# Learning Svelte is so cool!

## Markdown is pretty cool too!`

<textarea
  id="editor"
  on:keyup={handleInput}
  bind:value={markdownContent}
/>
<div id="preview" bind:this={htmlContent} />
```

Next, to help with our styling, we're going to use a library called [Split.js](https://split.js.org/).
