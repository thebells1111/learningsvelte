<script>
  import quoteBank from './quotes.json';
  import LeftPanel from './LeftPanel.svelte';
  import RightPanel from './RightPanel.svelte';
  let quotes = shuffle(quoteBank);
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
      quotes = shuffle(quoteBank);
    }
  }

  function shuffle(array) {
    let a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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
    display: flex;
    flex-direction: row;
  }
</style>

<svelte:head>
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
    <LeftPanel {currentText} />
    <RightPanel {currentAuthor} {twitterUrl} {newQuote} />
  </div>
</div>
