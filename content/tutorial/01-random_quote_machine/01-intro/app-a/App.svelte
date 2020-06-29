<script>
  import quotes from './quotes.json';
  let index = 0;

  function newQuote() {
    index++;
    if (index === quotes.length) {
      index = 0;
    }
  }

  $: currentText = `"${quotes[index].text}"`;
  $: currentAuthor = quotes[index].author;
  $: encodedTweet = encodeURIComponent(
    `${currentText}  -${currentAuthor}`
  );
  $: twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodedTweet}`;
</script>

<style>
  #text {
    height: 4em;
    padding-bottom: 1em;
  }

  button {
    background: transparent;
    border: none;
    float: right;
  }

  i {
    color: black;
  }

  #quote-box {
    width: 50%;
    border: 1px solid black;
    padding: 1em;
    border-radius: 10px;
  }

  .container {
    height: 100%;
    display: grid;
    place-items: center center;
  }

  #author {
    width: 100%;
    text-align: right;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    id="font-awesome-css"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
    type="text/css"
    media="all"
  />
</svelte:head>
<div class="container">
  <div id="quote-box">
    <p id="text">{currentText}</p>
    <p id="author">- {currentAuthor}</p>
    <a href={twitterUrl} id="tweet-quote">
      <i class="fa fa-twitter fa-2x" aria-hidden="true" />
    </a>
    <button id="new-quote" on:click={newQuote}>
      <i class="fa fa-share fa-2x" aria-hidden="true" />
    </button>
  </div>
</div>
