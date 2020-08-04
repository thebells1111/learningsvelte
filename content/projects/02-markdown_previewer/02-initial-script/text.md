---
title: Create Initial Script
---

This is a surprisingly simple project. We're going to use the [Marked.js](https://marked.js.org/) library, which will do most of the heavy lifting for us. If we were doing this as a stand alone project, using a text editor, we would first need to run `npm install marked --save-dev` in order to install the library in our `node_modules` folder. However, since we're using the Repl, that step is taken care of for us. 

So, let's start. Inside `App.svelte`, create a `script` tag, and import `marked`. Since we want the extra credit by converting line breaks to `<br>` tags, we'll also set the `breaks` option to `true`.

```html
<script>
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });
</script>
```

Next, we'll set a reactively declared variable, and call it `htmlContent`. Then set the value equal to `marked(markdownContent)`. Now, whenever the variable `markdownConent` is changed, the `marked` function will be called again, and `htmlContent` will be reactively updated.

```html
<script>
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });

  $: htmlContent = marked(markdownContent);
  
</script>
```

Finally, we'll create a variable that holds our initial `markdownContent` string. We want to make sure the string contains the markdown for a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text. This way we can ensure we complete User Story #5.

**User Story #5**: When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

```html
<script>
  import marked from 'marked';
  marked.setOptions({
    breaks: true,
  });

  $: htmlContent = marked(markdownContent);

  let markdownContent = `# Learning Svelte is so cool!

  ## Markdown is pretty cool too!
  ### And here's some things you can do with Markdown:
    
  You can inline code \`<p>Svelte is Amazing!!!</p>\`.

  Or, do a code block. What?!? Is that the code from our script tag inside our Markdown?

  \`\`\`script
  import { onMount } from 'svelte';
    import marked from 'marked';
    marked.setOptions({
      breaks: true,
    });

    onMount(handleInput);

    function handleInput() {
      htmlContent.innerHTML = marked(markdownContent);
    }

    let htmlContent;
  \`\`\`
    
  You can **bold**,  _italics_, or **_both!_**.

  You can even do a block quote. Like this one from Marcus Aurelius.
  > It is our own opinions that disturb us. Take away these opinions then, and resolve to dismiss your judgment about an act as if it were something grievous, and your anger is gone.

  Wait... haven't I seen that quote before? You sure have, back when you did the [Random Quote Machine](https://learningsvelte.com/projects/random_quote_machine/intro) tutorial.

  And of course there are lists. Like this list of tutorials you want to do.
  - [Random Quote Machine](https://learningsvelte.com/projects/random_quote_machine/intro)
  - [Drum Machine](https://learningsvelte.com/projects/drumkit/intro)
  - [Calculator](https://learningsvelte.com/projects/calculator/intro)

  ![Doug the Dog](https://res.cloudinary.com/learningsvelte/image/upload/v1593136802/Doug_the_Doug_Color.png)
  `;
</script>
```

