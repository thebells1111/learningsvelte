---
title: Import and Display Quotes
---

For this particular app, we're going to have the quotes as a separate file. It is possible to get quotes from an API and display them, but for something this small, I prefer to just have the quotes readily available and not require a `fetch` call to get the data. 

The format of the quotes will be an array, and for each item of the array will be an object with a key of `author` and a key of `text`. The file is already included in the tutorial to save you the trouble of finding and typing your own quotes. 

To access the file, inside of your script tag add the following:

```html
<script>
  import quotes from './quotes.json';
  let index = 0;
  let currentText = '';
  let currentAuthor = '';
</script>
```

The `index` variable was added, because we will be using that to access each of the quote objects. In order to set the `currentText` and `currentAuthor` to one of the quote objects, we're going to change the `let` declaration to a `reactive` declaration. Svelte does this by using `$:` which tells the compiler "Write code so any time one of the variables referenced changes, update the declared variable."

```html
<script>
  import quotes from './quotes.json';
  let index = 0;
  $: currentText = quotes[index].text;
  $: currentAuthor = quotes[index].author;
</script>
```
Since we're using an array of objects to store our data, we just access the `text` key and `author` key of the object found at the current index, and set our `currentText` and `currentAuthor` variable accordingly.

By using `$:`, if either the `quotes` array or the `index` varaible changes, the `currentText` and `currentAuthor` variable will be reactively updated. This is one of the beautiful things about Svelte. Reactive updating is super easy and intuitive as soon as you get use to using `$:` to declare your reactive variables.

You'll also notice that the quote and author are now displayed in app. Which completes User Stories #6 & #7.

**User Story #6:** On first load, my quote machine displays a random quote in the element with id="text".

**User Story #7:** On first load, my quote machine displays the random quote's author in the element with id="author".

