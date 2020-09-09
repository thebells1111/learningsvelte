---
title: Horizontal/Vertical Split Screen
---
This layout works for a narrow screen, but for a wider screen, it would be nice if the screen split horizontally instead of vertically. Since we used a Svelte action, we can make that happen.  First though, we'll need to know how wide the screen is so we can determine whether to split it horizontally or vertically. So, we'll create a variable to hold the container width.

```js
onMount(handleInput);

let htmlContent;
let containerWidth;
let splitInstance;

function handleInput()...
```

Then, we can bind the dimension of an element to `containerWidth`. We care about the `s-panel-container`, to we'll bind it's width using Svelte's `bind:clientWdith`. If we put `{clientWidth}` in our markup, we can see it dynamically update as we change the REPL preview panel. 

Inside of the markup, change it to look like this.

```html
{containerWidth}
<s-panel-container
  bind:clientWidth={containerWidth}
  use:splitPane
>
  <textarea...
```

Now that we know we can track the container width, let's remove `{containerWidth}` from the markup. 

With the `containerWidth` variable updating as we resize the container, we can use that to create a CSS variable to change `s-panel-container`'s `flex-direction` base on the width of the screen. We'll add a `style` tag to `s-panel-container` and use it to create an `orientation` variable.

```html
{containerWidth}
<s-panel-container  
  style="--orientation: {containerWidth > 600 ? 'row' : 'column'}"
  bind:clientWidth={containerWidth}
  use:splitPane
>
  <textarea...
```

Now, if the `containerWidth` is greater than 600, then the `orientation` will be `row`, otherwise, it will be column. With that, let's change the `flex-direction` in the `s-panel-container` style to `var(--orientation)`. 

```css
s-panel-container {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    flex-direction: var(--orientation);
  }
```

Now, when we resize the preview panel, the panels will change how they're split. However, we have a new problem. When the screen is wider than 600, the gutter resizes when the mouse is moved up/down rather than left/right. That's because Split.js is initialized with a `direction` of `vertical`. We need a way to rerun the Split function whenever the orientation changes. 

Svelte actions allow us to do this by returning an update function. Inside of the `splitPane`function, below the `Split` function, add the new `return {update(){}}` function.

```js
function splitPane() {
  Split(['#editor', '#preview'], {
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
  }

  return 
    update() {
    },
  };
}
```

`update` is the function that will run whenever the Svelte action is updated. It's inside here that we can write some code to re-run `Split`.