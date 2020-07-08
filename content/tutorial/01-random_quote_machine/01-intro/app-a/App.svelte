<script>
  import quotes from './quotes.json';
  let index = 0;
  let name;

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
  .container {
    height: 100%;
    display: grid;
    place-items: center center;
    width: 100%;
    height: 100%;
    background-color: rgba(96, 149, 159, 0.4);
  }

  #quote-box {
    box-sizing: border-box;
    display: flex;
    width: 500px;
    height: 350px;
    background-color: white;
    transform: rotate(-3deg);
    padding: 12px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: 'La Belle Aurore';
  }

  .quote {
    box-sizing: border-box;
    width: 50%;
    font-size: 1.2em;
    line-height: 1.2em;
    padding: 0.5rem 1rem 0 1rem;
    overflow: auto;
    cursor: context-menu;
    transform: rotate(-3deg);
    margin-right: 1rem;
  }

  .right-side {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    border-left: solid black 2px;
    padding: 0 0 0 1em;
    font-family: 'Great Vibes';
  }

  p {
    margin: 0;
    padding: 0;
  }

  .author {
    margin: 0 0 0 0.25em;
    font-family: 'La Belle Aurore';
    font-size: 1.3em;
  }

  input {
    padding: 0;
    border: none;
    margin-left: 0.5em;
    width: 196px;
    font-family: 'La Belle Aurore';
    font-size: 1.3em;
  }

  ::placeholder {
    color: black;
    opacity: 1;
  }

  .author {
    margin: 0 0 0 0.5em;
    font-family: 'La Belle Aurore';
    font-size: 1.5em;
  }
  .author.small {
    font-size: 1.3em;
  }

  .author.smaller {
    font-size: 1.2em;
  }

  button {
    background: transparent;
    border: none;
    float: right;
    margin: 0;
    padding: 0;
  }

  i {
    color: black;
  }

  .head,
  .to {
    height: 25%;
  }
  .stamp {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    font-size: 0.8em;
    float: right;
    font-family: initial;
    display: grid;
    place-items: center;
    text-align: center;
  }

  .from {
    height: 40%;
  }

  .foot {
    height: 10%;
  }

  .small-text {
    font-size: 1em;
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
  <link
    rel="stylesheet"
    id="googlefonts-css"
    href="https://fonts.googleapis.com/css?family=Great+Vibes|La+Belle+Aurore"
    type="text/css"
    media="all"
  />
</svelte:head>

<div class="container">
  <div id="quote-box">
    <p
      id="text"
      class="quote"
      class:small-text={currentText.length > 250}
    >
      {currentText}
    </p>
    <div class="right-side">
      <div class="head">
        <div class="stamp">Place Stamp Here</div>
      </div>
      <div class="to">
        <p>to:</p>
        <input bind:value={name} placeholder="Enter Your Name Here" />
      </div>
      <div class="from">
        <p>from:</p>
        <p
          id="author"
          class="author"
          class:small={currentAuthor.length > 20}
          class:smaller={currentAuthor.length > 24}
        >
          {currentAuthor}
        </p>
      </div>
      <div class="foot">
        <a href={twitterUrl} id="tweet-quote">
          <i class="fa fa-twitter fa-2x" aria-hidden="true" />
        </a>
        <button id="new-quote" on:click={newQuote}>
          <i class="fa fa-share fa-2x" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</div>
