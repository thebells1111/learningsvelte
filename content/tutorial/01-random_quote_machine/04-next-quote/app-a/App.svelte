<script>
  import quotes from './quotes.json';
  let index = 0;
  $: currentText = quotes[index].text;
  $: currentAuthor = quotes[index].author;
</script>

<div id="quote-box">
  <p id="text">{currentText}</p>
  <p id="author">{currentAuthor}</p>
  <button id="new-quote">New Quote</button>
  <a id="tweet-quote">Tweet Quote</a>
</div>
