<script context="module">
  export async function preload({ params }) {
    const tutorials = await this.fetch(`projects.json`).then((r) => r.json());
    return { tutorials };
  }
</script>

<script>
  import { setContext } from 'svelte';

  export let tutorials;
  setContext('tutorials', tutorials);
</script>

<slot />
