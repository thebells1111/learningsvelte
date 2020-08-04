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
