---
title: Randomize Quote
component: App.svelte
fold: ["style"]
---
In order to make this random, we'll just create a new quotes array that shuffles our imported quotes. Then, whenever we get to the end of the shuffled quotes array, we'll just reset our index, and reshuffle the quotes, kind of like a deck of cards. We'll use the <a href="https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle" target="_blank" rel="noopener">Fisher & Yates Shuffle</a>. You don't have to know what it is to use it, but if you're curious, just click the link. 

First, let's create our `shuffle` function. Below the `newQuote` function add this.

```js
function shuffle(array) {
  let a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
```

Basically, this is cloning the array passed to it, shuffling the clone, then returning the shuffled clone.

Next, instead of 
```js
import quotes from './quotes.json';
```

change it to 
```js
import quoteBank from './quotes.json';
```

We just changed the name `quote` to `quoteBank`.

Then we'll create our quotes variable by calling the `shuffle` function with `quoteBank` as an arugment. Below `import RightPanel from './RightPanel.svelte';` add
`let quotes = shuffle(quoteBank);.`

```js
import quoteBank from './quotes.json';
import LeftPanel from './LeftPanel.svelte';
import RightPanel from './RightPanel.svelte';
let quotes = shuffle(quoteBank);
```

Now, whenever the page is reloaded, the `quotes` array is shuffled. All that's left is reshuffling the array whenever we get to the last quote. Inside of the `newQuote` function, below `index = 0;`, add `quotes = shuffle(quoteBank);`.

```js
function newQuote() {
  index++;
  if (index === quotes.length) {
      index = 0;
      quotes = shuffle(quoteBank);
  }
}
```

This will give us a whole new array with quoteBank reshuffled. 

That's it. Our App is complete, and we can now enjoy the good life, just as the Stoics intended.