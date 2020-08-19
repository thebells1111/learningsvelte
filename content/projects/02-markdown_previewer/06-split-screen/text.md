---
title: Split Screen Styling
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

So, let's go ahead and import that.

```html
<script>
  import { onMount } from 'svelte';
  import Split from 'split.js';
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });
  ...
```

Then, we're going to create a function for using a [Svelte action](https://svelte.dev/tutorial/actions). An action is basically a function that gets called whenever an element is created. It's kind of like using `onMount`, but is attached to a specific element by using the `use:function` directive. [Svelte.school](https://svelte.school/tutorials/introduction-to-actions) has a pretty good tutorial on actions, and I highly recommend checking it out. The action we're going to be creating is what will implement the `Split.js` library when our component is created. 

So, right below the `handleInput` function, we'll create a new function called splitPane

```js
function handleInput() {
    htmlContent.innerHTML = marked(markdownContent);
  }

function splitPane(node) {
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

let markdownContent = `# Lea...
```

So we have a few things going on here. We created a function that will call the `Split` function. Reading through the [docs of Split.js](https://github.com/nathancahill/split/tree/master/packages/splitjs), I've decided to use the flexbox method. So, the first argument for the `Split` function will be an array of the div's we'll be splitting, and the second will be our options object. Because the preview screen to the right is narrow, I've decided to go with a `vertical` direction. The `elementStyle` is copied straight from the docs, but is a function that will update the inline styling of the two div's passed in the first argument.  The `gutterStyle` is similar to the `elementStyle`, but is used to style the line between the two elements. It takes an object of CSS styles, and will apply them to the gutter. I gave it a border width so it was easier to grab with the mouse, and a gray color. Finally, a `gutterSize` is given which will be used in the `elementStyle` and `gutterStyle` functions.

Now, we can go down to our markup and wrap our two divs in a new custom element called `s-panel-container`. We're using a custom element instead of a div because it's makes the markup more intuitive, and all of the cool kids are using custom elements. You wanna be cool, don't you???

```html
<s-panel-container>
  <textarea
    id="editor"
    on:keyup={handleInput}
    bind:value={markdownContent}
  />
  <div id="preview" bind:this={htmlContent} />
</s-panel-container>
```

Then, we'll tell `s-panel-container` to `use:splitPane`.

```html
<s-panel-container use:splitPane>
  <textarea
    id="editor"
    on:keyup={handleInput}
    bind:value={markdownContent}
  />
  <div id="preview" bind:this={htmlContent} />
</s-panel-container>
```

Now, when `s-panel-container` is created, the `splitPane` function will be called, with `s-panel-container` as the `node` sent to the function.

It doesn't appear that anything has happened, but once we style `s-panel-container`, we'll see some magic. So, in our `style` tag, let's add

```css
s-panel-container {
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  flex-direction: column;
}
```

And BOOM!!! MAGIC!!!

If we click on the gutter, we can now resize the two panels. Let's also add a gutter style so the cursor changes when we hover over the gutter. Reading through the Split.js docs, we find we just need to add a class of `.gutter-vertical` to the styles. So, in the style tag, add:

```css
.gutter-vertical {
  cursor: ns-resize;
}
```

Now, this giving an warning about an unused CSS selector. That is because that style get's added programmatically by Split.js, so the Svelte complier isn't seeing it when the component is built. By wrapping the style in a global wrapper, we can remove the warning.

```css
:global(.gutter-vertical) {
  cursor: ns-resize;
}
```

Now, when we hover over the gutter, the cursor changes.