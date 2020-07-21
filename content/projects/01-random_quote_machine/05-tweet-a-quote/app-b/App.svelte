<script>
  import quotes from './quotes.json';
  let index = 0;
  $: currentText = quotes[index].text;
  $: currentAuthor = quotes[index].author;
  $: encodedTweet = encodeURIComponent(
    `"${currentText}"  -${currentAuthor}`
  );
  $: twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodedTweet}`;

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
  <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
</div>
