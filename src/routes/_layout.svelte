<script>
  import { setContext } from 'svelte';
  import { stores } from '@sapper/app';
  import Nav from '../components/Nav/Nav.svelte';
  import NavItem from '../components/Nav/NavItem.svelte';
  import PreloadingIndicator from '../components/PreloadingIndicator.svelte';

  export let segment;

  const { page, preloading, session } = stores();
</script>

<style>
  main {
    position: relative;
    margin: 0 auto;
    /* padding: var(--nav-h) var(--side-nav) 0 var(--side-nav); */
    padding: var(--nav-h) 0 0 0;
    overflow-x: hidden;
  }
</style>

{#if $preloading}
  <PreloadingIndicator />
{/if}

{#if $page.path !== '/repl/embed'}
  <Nav {segment} {page} title="Learning Svelte">
    <NavItem segment="projects">Projects</NavItem>
    <NavItem segment="blog">Blog</NavItem>
  </Nav>
{/if}

<main>
  <slot />
</main>
