<script context="module">
  export async function preload({ params }) {
    return {
      slug: params.slug,
    };
  }
</script>

<script>
  import { stores } from '@sapper/app';
  import { getContext } from 'svelte';
  export let slug;
  const tutorialCtx = getContext('tutorials');
  const page = tutorialCtx[slug].tutorial;
</script>

<h1>{page.title}</h1>
{#if page.img}
  <img alt="A screenshot of the finished project" src={page.img} />
{/if}
<p>{page.description}</p>
<a href="projects/{slug}/intro">Let's get coding!!!</a>
