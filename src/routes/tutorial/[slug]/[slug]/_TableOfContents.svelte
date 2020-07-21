<script>
  import { goto } from '@sapper/app';
  import { Icon } from '@sveltejs/site-kit';

  export let TOC;
  export let slug;
  export let title;

  function navigate(e) {
    goto(`tutorial/${TOC.tutorial.slug}/${e.target.value}`);
  }
</script>

<style>
  nav {
    display: grid;
    grid-template-columns: 2.5em 1fr 2.5em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  nav {
    display: initial;
  }

  div {
    position: relative;
    /* padding: 1em 0.5em; */
    font-weight: 300;
    font-size: var(--h6);
    color: var(--text);
    height: 42px;
  }

  span {
    white-space: nowrap;
    position: relative;
    top: 0.3em;
  }

  select {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 42px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.15em;
    cursor: pointer;
    font-weight: 500;
    font-size: var(--h4);
    color: var(--text);
    padding: 0 1em;
  }
</style>

<nav>
  <div>
    <span>
      <strong>
        <span style="position: relative; top: -0.1em; margin: 0 0.5em 0 0">
          <Icon name="menu" />
        </span>
        {title}
      </strong>
    </span>
    <select value={slug} on:change={navigate}>
      {#each TOC.chapters as chapter, i}
        <option value={chapter.slug}>{i + 1}. {chapter.title}</option>
      {/each}
    </select>
  </div>
</nav>
