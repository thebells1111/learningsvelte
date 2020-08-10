---
title: Refactor Code for fCC Tests
---
First, let's create an `on:keyup` event handler on the `textarea`.

```html
<textarea id="editor" bind:value={markdownContent} on:keyup={handleInput}/>
<div id="preview">
  {@html htmlContent}
</div>
```

Then, inside the script, let's create the `handleInput` function. It's basically going to be a clone of the `$: htmlContent` reactive declaration.

```html
<script>
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });

  $: htmlContent = marked(markdownContent);

  function handleInput() {
    htmlContent = marked(markdownContent);
  }

  let markdownContent = `# Learning Svelte is so cool!...
```

And since we're now updating `htmlContent` with the `handleInput` function, we can make `htmlContent` a regular `let` variable. Because it references `markdownContent`, we'll have to move it below the `markdownContent` declaration.

```html
<script>
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });  

  function handleInput() {
    htmlContent = marked(markdownContent);
  }

  let markdownContent = `# Learning Svelte is so cool!...`

  let htmlContent = marked(markdownContent);
```

Sweet. Now, run the test again, and... wait for it... wait for it... succ... What!?!... Fail!?!

Hmmm... not cool.

Okay, so maybe it's something with using the curly braces inside of `#preview` that the Test Suite is having troubles with. Well, we could update it using the `innerHTML` attribute of the element. Let's try that. Let's use the `htmlContent` variable as a place to store a reference to the `#preview` element. We can do that by using Svelte's `bind:this`. Down in our markup, we'll change `#preview` to make this happen.

```html
<textarea id="editor" bind:value={markdownContent} on:keyup={handleInput}/>
<div id="preview" bind:this="htmlContent" />
```

And since we change what `htmlContent` is now referencing, we can change it's initial declaration and move it back above that mess we're calling `markdownContent`.

```html
<script>
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });    

  function handleInput() {
    htmlContent = marked(markdownContent);
  }

  let htmlContent;

  let markdownContent = `# Learning Svelte is so cool!...`
</script>
```

Then, we'll have to change our `handleInput` function to update the `innerHTML` of `htmlContent`

```js
  function handleInput() {
    htmlContent.innerHTML = marked(markdownContent);
  }
```

Ok, so now `#preview` is blank. But if we type something into the `textarea`, `#preview` updates. If we run our fCC Test, we're now getting 7/8 passed. Looking at the log for the one that's not passing, we find the markdown is not there on first load. We can use Svelte's `onMount` to remedy this. We'll have to import it first.

```html
<script>
  import { onMount } from 'svelte';
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });
  ...
```

`onMount` is one of Svelte's lifecycle methods. It's a function that takes another function as it's argument. Typically, we would pass an inline function to it. Something like
```js
onMount( ()=>console.log('I run when the component is mounted') )
```

However, we already have a function that will update the `innerHTML` of `htmlContent`. So, we'll just tell `onMount` to run `handleInput` when this component initially mounts.

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
```

Now, let's try our Test. Awesome!!! They all pass. It's a little bit convoluted that work around we had to do to make the test pass, but it's also cool, because Svelte allows us to accomplish the same thing in different ways. I think the original code is better, but for the sake of passing the fCC test, we'll roll with this new code. With the test being passed, all that's left is styling.