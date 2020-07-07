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

<style>
  .container {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center center;
    background-color: rgba(96, 149, 159, 0.4);
  }

  #quote-box {
    box-sizing: border-box;
    width: 500px;
    height: 350px;
    background-color: white;
    padding: 12px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>

<svelte:head>
  <script
    src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js">

  </script>
</svelte:head>

<div class="container">
  <div id="quote-box">
    <p id="text">{currentText}</p>
    <p id="author">{currentAuthor}</p>
    <button id="new-quote" on:click={newQuote}>New Quote</button>
    <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
  </div>
</div>
