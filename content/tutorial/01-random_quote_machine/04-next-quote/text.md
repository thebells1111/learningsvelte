---
title: Create Next Quote Function
foldLine: [1]
---
**User Story #8:** When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

**User Story #9:** My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

These two User Stories are going to be a snap to complete. All we need to do is create a function that increments index whenever the `#new-quote` button is clicked. Because currentText and currentAuthor are reactive, they will update automatically. One little thing to keep in mind, is if we keep incrementing, we can get `index` to be at a higher value than `quotes.length`, so we'll just add some code to our function that resets `index` to zero whenever it reaches the end of the quotes.


```html
<script>
  import quotes from './quotes.json';
  let index = 0;
  let currentText = '';
  let currentAuthor = '';

  function newQuote() {
    index++;
    if (index === quotes.length) {
      index = 0;
    }
  }
</script>
```
Next, we'll need a way to call the `newQuote` function whenever the button is clicked, which we'll do with by attaching the `on:click` DOM event to the `#new-quote` button.

```html
<div id="quote-box">
  <p id="text">{currentText}</p>
  <p id="author">{currentAuthor}</p>
  <button id="new-quote" on:click={newQuote}>New Quote</button>
  <a id="tweet-quote">Tweet Quote</a>
</div>
```
Now you can click on the `#new-quote` button, and watch those new quotes come in.
