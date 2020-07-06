---
title: Create Markup
---
Accomplishing these user stories is actually pretty straight forward. The styling for the post card effect is sort of a pain, though. Let's start off by just completing the user stories, then polishing the app. We'll be doing all of this inside of `App.svelte`. 

**User Story #1:** I can see a wrapper element with a corresponding id="quote-box".
```html
<div id="quote-box">

</div>
```

**User Story #2:** Within #quote-box, I can see an element with a corresponding id="text".
```html
<div id="quote-box">
  <p id="text">{currentText}</p>
</div>
```

**User Story #3:** Within #quote-box, I can see an element with a corresponding id="author".
```html
<div id="quote-box">
  <p id="text">{currentText}</p>
  <p id="author">{currentAuthor}</p>
</div>
```

**User Story #4:** Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
```html
<div id="quote-box">
  <p id="text">{currentText}</p>
  <p id="author">{currentAuthor}</p>
  <button id="new-quote">New Quote</button>
</div>
```

**User Story #5:** Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
```html
<div id="quote-box">
  <p id="text">{currentText}</p>
  <p id="author">{currentAuthor}</p>
  <button id="new-quote">New Quote</button>
  <a id="tweet-quote">Tweet Quote</a>
</div>
```

Finally, let's clear those error by creating the `currentText` and `currentAuthor` variables inside of our `script` tag.

```html
<script>
  let currentText = '';
  let currentAuthor = '';
</script>

<div id="quote-box">
  <p id="text">{currentText}</p>
  <p id="author">{currentAuthor}</p>
  <button id="new-quote">New Quote</button>
  <a id="tweet-quote">Tweet Quote</a>
</div>
```

Because the `currentText` and `currentAuthor` variables are empty, nothing is displayed, but we're going to fix that in the next step.

