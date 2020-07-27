---
title: Control Buttons
component: RightPanel.svelte
fold: ["script"]
---
We're just about wrapped up with this one. We just need to style our buttons, and all of the styling will be complete. We'll add some icons to the buttons so they look mo' better. To do that, we'll just do the lazy-man's method, and bring them in from font-awesome. In `RightPanel.svelte`, add a `svelte:head` with a reference to the `font-awesome` CSS file.

```html
<svelte:head>
  <link
    rel="stylesheet"
    id="font-awesome-css"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
    type="text/css"
    media="all"
  />
</svelte:head>

<pc-panel>
  <pc-stamp>...
```

Then it's just a matter of replace 'New Quote' with the `fa-share` icon, and 'Tweet Quote' with the `fa-twitter` icon.


```html
<pc-control-buttons>
  <button id="new-quote" on:click={newQuote}>
    <i class="fa fa-share fa-2x" aria-hidden="true" />
  </button>
  <a href={twitterUrl} id="tweet-quote">
    <i class="fa fa-twitter fa-2x" aria-hidden="true" />
  </a>
</pc-control-buttons>
```

For styling consistency, let's move the `button` selector to the bottom of our styles, and rename it to `pc-button-controls > button`. Then, have it `float: right` to push it to the right hand side of the screen. 

```html
<style>
...
  pc-valediction > p:nth-of-type(2) {...}

  pc-control-buttons > button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      margin: 0;
      outline: none;
      float: right;
  }
</style>
```

Finally, we'll change the color of the twitter icon to black.

```css
pc-control-buttons > button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
  float: right;
}

pc-control-buttons > a > i {
  color: black;
}
```

By and large, the app is complete. But let's add one more piece of functionality, where the quotes are displayed randomly.