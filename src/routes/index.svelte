<style>
  /* darken text for accessibility */
  /* TODO does this belong elsewhere? */
  :global(.back-light) {
    --text: hsl(36, 3%, 44%);
  }

  p {
    margin: 2em 5em;
  }
</style>

<svelte:head>
  <title>Learning Svelte</title>

  <meta name="Description" content="Learning Svelte" />
</svelte:head>

<p>
  For some people, the best way to learn is by tinkering. Learning Svelte is
  designed to allow you to follow along a tutorial by actually writing the code
  yourself, but also to go off the beaten path some and explore how changing the
  code may affect the overall project. By using the REPL found on the Svelte
  website, you're able to get instant feedback on your code and learn how
  everything interacts, then return back to the path of the tutorial to learn
  how complete projects can be built using Svelte.
</p>
