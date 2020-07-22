<script>
  import { getContext } from 'svelte';
  let tutorialCtx = getContext('tutorials');

  const tutorials = Object.keys(tutorialCtx).map(
    (v) => tutorialCtx[v].tutorial
  );
</script>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0.5em;
    justify-content: center;
    height: 100%;
    background-color: #f6f6f6;
  }

  a {
    border-bottom: none;
    border: 1px solid transparent;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    color: black;
    margin: 0.5em;
    max-width: 320px;
    padding: 0.5em;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 2px 3px 0 rgba(0, 0, 0, 0.04);
    background-color: #ffffff;
    height: 450px;
  }

  a:hover {
    color: black;
  }

  img {
    border-radius: 4px;
    height: 33%;
    width: auto;
    align-self: center;
  }

  h4 {
    margin: 0.5em 0;
  }

  p {
    padding-left: 0.25em;
  }
</style>

<section>
  {#each tutorials as tutorial}
    <a href="projects/{tutorial.slug}/intro">
      {#if tutorial.img}
        <img alt="A screenshot of the finished project" src={tutorial.img} />
      {/if}
      <h4>
        {@html tutorial.title}
      </h4>
      {#if tutorial.description}
        <p>{tutorial.description}</p>
      {/if}
    </a>
  {/each}
</section>
