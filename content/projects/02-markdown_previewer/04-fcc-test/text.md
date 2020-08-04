---
title: Test using fCC Test Suite
fold: ["script"]
---
Now let's test everything out so we can get credit for this from freeCodeCamp.

Above the rest of the markup, we'll use `svelte:head`, which allows Svelte to inject stuff into the `head` of the document. We'll inject a script tag with a link to the fcc Test Suite.

```html
<svelte:head>
  <script
    src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js">

  </script>
</svelte:head>
<textarea id="editor" bind:value={markdownContent} />
<div id="preview">
  {@html htmlContent}
</div>
```

Then we select `Markdown Previewer` and press `Run Test`.

Hmmm... that's odd. We should be passing the test, but we're failing them. Let's look at the the log of the tests by clicking `Test 5/8`.

Okay, so it's basically saying as we type, the `#preview` area is not being updated. But, if we type in the `textarea`, `#preview` is updated. It must be the way the test is written, and it's not detecting the changes. Looking a little more at the error, it is looking for the change on `keyup`. Well, I prefer our code to stay as written, but it's not going to work with the Test Suite. Let's refractor our code so we can pass the Test.

