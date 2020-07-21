<script context="module">
  export async function preload({ path, params }) {
    const res = await this.fetch(`${path}.json?slug=${params.slug}`);
    const json = await res.json();
    const tutorialSlug = path.split('/')[2];

    if (!res.ok) {
      return this.redirect(301, `tutorial`);
    }

    return {
      tutorial: { slug: tutorialSlug },
      slug: params.slug,
      chapter: json.tut,
    };
  }
</script>

<script>
  import Repl from '../../../../components/Repl/Repl.svelte';
  import { getContext } from 'svelte';

  import ScreenToggle from '../../../../components/ScreenToggle.svelte';
  import TableOfContents from './_TableOfContents.svelte';

  import { rollupUrl, svelteUrl } from '../../../../config';

  let tutorials = getContext('tutorials');
  export let slug;
  export let chapter;
  export let tutorial;
  let foldLine;
  $: metadata = chapter.metadata;
  $: title = metadata.title;
  $: selectedComponent = metadata.component;
  $: try {
    foldLine = JSON.parse(metadata.fold);
  } catch (e) {
    foldLine = undefined;
  }

  let TOC = tutorials[tutorial.slug];

  let repl;
  let prev;
  let scrollable;
  let selected;
  const lookup = new Map();

  let width = process.browser ? window.innerWidth : 1000;
  let offset = 0;

  $: selected = lookup.get(slug);

  const clone = (file) => ({
    name: file.name,
    type: file.type,
    source: file.source,
  });

  $: if (repl) {
    if (scrollable) {
      scrollable.scrollTop = 0;
    }
    repl.set({
      components: chapter.app_a.map(clone),
      foldLine: foldLine,
      selectedComponent: selectedComponent,
    });
  }

  $: mobile = width < 768;

  function completeCode() {
    repl.set({
      components: chapter.app_b.map(clone),
    });
  }
</script>

<style>
  .tutorial-outer {
    position: relative;
    height: calc(100vh - var(--nav-h));
    overflow: hidden;
    padding: 0 0 42px 0;
    box-sizing: border-box;
  }

  .viewport {
    display: grid;
    width: 300%;
    height: 100%;
    grid-template-columns: 33.333% 66.666%;
    transition: transform 0.3s;
    grid-auto-rows: 100%;
  }

  .offset-1 {
    transform: translate(-33.333%, 0);
  }
  .offset-2 {
    transform: translate(-66.666%, 0);
  }

  @media (min-width: 768px) {
    .tutorial-outer {
      padding: 0;
    }

    .viewport {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: minmax(33.333%, var(--sidebar-large-w)) auto;
      grid-auto-rows: 100%;
      transition: none;
    }

    .offset-1,
    .offset-2 {
      transform: none;
    }
  }

  .tutorial-text {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-right: 1px solid var(--second);
    background-color: var(--back);
    color: var(--text);
  }

  .chapter-markup {
    padding: 0 0 0 4rem;
    overflow: auto;
    flex: 1;
    height: 0;
  }
  .chapter-markup > div:first-child {
    height: calc(100% - 7rem);
    overflow: auto;
    padding: 2rem 1rem 1rem 0;
  }

  .chapter-markup :global(h2) {
    margin: 4rem 0 1.6rem 0;
    font-size: var(--h3);
    line-height: 1;
    font-weight: 400;
  }

  .chapter-markup :global(h2:first-child) {
    margin-top: 0.4rem;
  }

  .chapter-markup :global(a) {
    color: var(--text);
  }

  .chapter-markup :global(a:hover) {
    color: #aaa;
  }

  .chapter-markup :global(ul) {
    padding: 0 0 0 2em;
  }

  .chapter-markup :global(blockquote) {
    /* background-color: purple; */
    color: var(--text);
  }

  .chapter-markup > div:first-child::-webkit-scrollbar {
    background-color: var(--back);
    width: 8px;
  }

  .chapter-markup > div:first-child::-webkit-scrollbar-thumb {
    background-color: var(--second);
    border-radius: 1em;
    outline: 1px solid black;
  }

  .chapter-markup :global(p) > :global(code),
  .chapter-markup :global(ul) :global(code) {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 6px;
  }

  .controls {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding: 1rem 0 0 0;
    margin: 0 3.2rem 0 0;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
  }

  .controls > div {
    display: flex;
  }

  .controls > div:nth-child(1) {
    justify-content: flex-start;
  }

  .controls > div:nth-child(2) {
    justify-content: center;
  }

  .controls > div:nth-child(3) {
    justify-content: flex-end;
  }

  .show {
    font-weight: 300;
    color: var(--text);
    flex-grow: 1;
  }

  .show:hover {
    color: #aaa;
  }

  a.next {
    border: none;
    align-self: flex-end;
  }

  a.prev {
    border: none;
  }
</style>

<!-- <svelte:head>
	<title>{selected.section.title} / {selected.chapter.title} • Svelte Tutorial</title>

	<meta name="Description" content="{selected.section.title} / {selected.chapter.title}">
</svelte:head> -->

<svelte:window bind:innerWidth={width} />

<div class="tutorial-outer">
  <div class="viewport offset-{offset}">
    <div class="tutorial-text">
      <div class="table-of-contents">
        <TableOfContents {TOC} {slug} {title} />
      </div>

      <div class="chapter-markup">
        <div bind:this={scrollable}>
          {@html chapter.html}
        </div>

        <div class="controls">
          <div>
            {#if chapter.prev}
              <a class="prev" href="projects/{tutorial.slug}/{chapter.prev}">
                Previous
              </a>
            {/if}
          </div>
          <div>
            {#if chapter.app_b}
              <button class="show" on:click={completeCode}>
                Auto Complete Code
              </button>
            {/if}
          </div>
          <div>
            {#if chapter.next}
              <a class="next" href="projects/{tutorial.slug}/{chapter.next}">
                Next
              </a>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <div class="tutorial-repl">
      <Repl
        bind:this={repl}
        workersUrl="workers"
        {svelteUrl}
        orientation={'columns'}
        fixed={mobile}
        relaxed
        {foldLine}
      />
    </div>
  </div>

  {#if mobile}
    <ScreenToggle bind:offset labels={['tutorial', 'input', 'output']} />
  {/if}
</div>
