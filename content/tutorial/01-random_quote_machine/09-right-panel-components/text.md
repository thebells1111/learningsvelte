---
title: Style LeftPanel.svelte
---
https://dev.to/jfbrennan/custom-html-tags-4788

For this component, we're going to use [custom elements](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/). [Jordan Brennan](https://dev.to/jfbrennan/custom-html-tags-4788) has an article that explains custom elements as well. I like using them, and they feel natural in Svelte where we have components anyway. 

We could break each of our custom elements into a separate component, which in many case makes sense. However, for this tutorial, we would need four separate components for the `RightPanel`, and with the REPL setup the way it is, it can get a little cumbersome. If I was doing this in VSCode, I would definitely consider putting everything in a folder titled `RightPanel` and creating four separate components. 

Because this is suppose to look like a postcard, we'll have a stamp, a salutation, a valediction, and footer type thing for the control buttons.

So, inside of `RightPanel.svelte`, we're going to change the markup to look like this.

```html
<pc-panel>
  <pc-stamp></pc-stamp>
  <pc-salutation></pc-salutation>
  <pc-valediction>
    <p id="author">{currentAuthor}</p>
  </pc-valediction>
  <pc-control-buttons>
    <button id="new-quote" on:click={newQuote}>New Quote</button>
    <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
  </pc-control-buttons>
</pc-panel>
```

Instead of using a bunch of `div`s with classes, we can just create our own elements, and our html becomes a little bit more clear of what is going on. I'm prefaced each of my elements with `pc`, which is short for postcard, because a lot of what I've read recommends doing that in case one of our custom elements becomes a standard element, the code may break in a future browser, so the prefix is to help mitigate that. 

The right panel still looks the same, but we're now using custom elements. 

First, let's style the panel some. This is all pretty standard CSS.

```html
<style>
  pc-panel {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 0 0 0 1em;
    font-family: 'Great Vibes';
  }
</style>
```

Each of custom elements is an `inline` element, so for each one, we'll make it a `block` element, as well as defining a `height` for it.

```html
<style>
  pc-panel {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 0 0 0 1em;
    font-family: 'Great Vibes';
  }

  pc-stamp,
  pc-salutation {
    height: 25%;
    display: block;
  }
  pc-valediction {
    height: 40%;
    display: block;
  }

  pc-control-buttons {
    display: block;
  }
</style>
```
