<script>
  export let currentAuthor;
  export let newQuote;
  export let twitterUrl;
</script>

<div class="right-panel">
  <p id="author">{currentAuthor}</p>
  <button id="new-quote" on:click={newQuote}>New Quote</button>
  <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
</div>
