---
title: Break into components
---

Since everything is passing the test, let's go remove the the fCC Test Suite Link, and add in some links to some Google Fonts. We're going to be using two different fonts. Since this is suppose to be a postcard, I found some fonts that look like handwriting, and we'll use them a little later in the project.

```html
<svelte:head> 
  <link
    rel="stylesheet"
    id="googlefonts-css"
    href="https://fonts.googleapis.com/css?family=Great+Vibes|La+Belle+Aurore"
    type="text/css"
    media="all"
  />  
</svelte:head>
```

Next, we'll create a right panel and a left panel for our post card. We'll have the `#text` in the left panel, and everything else in the right panel.

```html
<div class="container">	
  <div id="quote-box">
    <div class="left-panel">
      <p id="text">{currentText}</p>
    </div>
    <div class="right-panel">
      <p id="author">{currentAuthor}</p>
      <button id="new-quote" on:click={newQuote}>New Quote</button>
      <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
    </div>
  </div>	
</div>
```

With that done, we can change the display of the `#quote-box` to `flex`, and change the `flex-direction` to `row`. That will split our two panes horizontally.

```css
  #quote-box {
    box-sizing: border-box;
    width: 500px;
    height: 350px;
    background-color: white;
    padding: 12px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: row;
  }
```

That sort of give us what we want, but it looks wonky. Before we do any more styling though, let's break the two panels into two separate components. We could do all of the styling inside of `App.svelte`, but I tend to prefer breaking each part into a smaller component to make styling of each component easier. Hit the `+` button on the Repl to create a component. We'll name one `LeftPanel.svelte` and the other `RightPanel.svelte`.

We're just going to cut and paste each panel div from `App.svelte` into it's respective component. But, since we removed the markup in `App.svelte` into a component, we'll have to replace that markup with the component.

So, the markup for each component will look like this.

`App.svelte`
```html
<div class="container">
  <div id="quote-box">
    <LeftPanel />
    <RightPanel />
  </div>
</div>
```

`LeftPanel.svelte`
```html
<div class="left-panel">
  <p id="text">{currentText}</p>
</div>
```

`LeftPanel.svelte`
```html
<div class="right-panel">
  <p id="author">{currentAuthor}</p>
  <button id="new-quote" on:click={newQuote}>New Quote</button>
  <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
</div>
```

Now, we have all sorts of errors. First, let's define each of our components in `App.svelte`. This will import the component into `App.svelte` which allows us to use the component in our markup.

```html
<script>
  import quotes from './quotes.json';
  import LeftPanel from './LeftPanel.svelte';
  import RightPanel from './RightPanel.svelte';
  let index = 0;
  ...
```

Now we have a bunch of props that aren't defined. Let's pass those props to our components.

In `App.svelte` change the markup to look like this.

```html
<div class="container">
  <div id="quote-box">
    <LeftPanel {currentText} />
    <RightPanel {currentAuthor} {twitterUrl} {newQuote} />
  </div>
</div>
```

This will pass each of the variables referenced to the component as a prop.

But, we still have errors. That's because inside of each component, we need to declare each of the props. We do that with the `export` keyword, which is kind of different, but you'll get use to it. `export` is Svelte's way of telling the component the variable will be receive prop data.

`LeftPanel.svelte`
```html
<script>
  export let currentText;
</script>

<div class="left-panel">
  <p id="text">{currentText}</p>
</div>
```
`RightPanel.svelte`
```html
<script>
  export let currentAuthor;
  export let newQuote;
  export let twitterUrl;
</script>

<div class="right-panel">
  <p id="author">{currentAuthor}</p>
  <button id="new-quote" on:click={newQuote}>New Quote</button>
  <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
</div>
```

Now we're back to where we started, but now with two components, which will make styling easier, since Svelte will scope our css for us.



