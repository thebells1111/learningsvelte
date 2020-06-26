<style>
  /* darken text for accessibility */
  /* TODO does this belong elsewhere? */
  :global(.back-light) {
    --text: hsl(36, 3%, 44%);
  }

  img {
    margin: 2em 0 0 2em;
    max-width: 90%;
  }

  div {
    display: flex;
    align-items: center;
  }

  p {
    padding: 2em 2em 0 2em;
    font-size: 1.4em;
    text-align: justify;
  }

  @media screen and (max-width: 749px) {
    div {
      flex-direction: column;
    }

    img {
      margin: 2em 2em 0 2em;
      max-width: 75%;
    }
  }
</style>

<svelte:head>
  <title>Learning Svelte</title>

  <meta name="Description" content="Learning Svelte" />
</svelte:head>

<div>
  <img
    alt="Doug the Dog"
    src="https://res.cloudinary.com/learningsvelte/image/upload/v1593136802/Doug_the_Doug_Color.png"
  />
  <p>
    For some people, the best way to learn is by tinkering. Learning Svelte is
    designed to allow you to follow along a tutorial by actually writing the
    code yourself, but also to go off the beaten path some and explore how
    changing the code may affect the overall project. By using the REPL found on
    the Svelte website, you're able to get instant feedback on your code and
    learn how everything interacts, then return back to the path of the tutorial
    to learn how complete projects can be built using Svelte.
  </p>
</div>
