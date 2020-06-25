<script>
  import { getContext } from 'svelte';
  let tutorialCtx = getContext('tutorials');

  const tutorials = Object.keys(tutorialCtx).map(
    (v) => tutorialCtx[v].tutorial
  );
  console.log(tutorials);
</script>

<style>
  ul {
    padding: 3em;
    list-style: none;
  }

  li {
    padding: 0.25em 0;
  }

  a {
    border-bottom: none;
  }
</style>

<ul>
  {#each tutorials as tutorial}
    <li>
      <a href={`/tutorial/${tutorial.slug}/intro`}>{tutorial.title}</a>
    </li>
  {/each}
</ul>
