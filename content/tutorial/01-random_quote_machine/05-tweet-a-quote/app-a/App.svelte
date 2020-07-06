<script>
  import quotes from './quotes.json';
  let index = 0;
  $: currentText = quotes[index].text;
  $: currentAuthor = quotes[index].author;

  function newQuote() {
    index++;
    if (index === quotes.length) {
      index = 0;
    }
  }
</script>

<div id="quote-box">
  <p id="text">{currentText}</p>
  <p id="author">{currentAuthor}</p>
  <button id="new-quote" on:click={newQuote}>New Quote</button>
  <a id="tweet-quote">Tweet Quote</a>
</div>
