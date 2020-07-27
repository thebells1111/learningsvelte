<script>
  export let currentAuthor;
  export let newQuote;
  export let twitterUrl;
  let name;
</script>

<style>
  pc-panel {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 0 0 0 1em;
    display: flex;
    flex-direction: column;
  }

  pc-stamp {
    flex: 0 1 auto;
    display: flex;
    flex-direction: row-reverse;
    position: relative;
  }

  pc-salutation {
    flex: 0 1 30%;
  }
  pc-valediction {
    flex: 1 1 30%;
  }
  pc-control-buttons {
    flex: 0 1 auto;
  }

  pc-stamp > p {
    width: 50px;
    height: 50px;
    margin: 0;
    border: 1px solid black;
    font-size: 0.8em;
    display: grid;
    place-items: center;
    text-align: center;
  }

  pc-stamp > img {
    position: absolute;
  }

  pc-stamp > img:nth-of-type(1) {
    top: -5px;
    transform: rotate(3deg);
  }

  pc-stamp > img:nth-of-type(2) {
    top: 25px;
    right: 25px;
  }

  pc-salutation > p {
    font-family: 'Great Vibes';
    margin: 0;
    padding: 2em 0 0 0;
  }

  pc-salutation > input {
    padding: 0;
    border: none;
    margin-left: 0.5em;
    width: 196px;
    font-family: 'La Belle Aurore';
    font-size: 1.3em;
    transform: rotate(-0.5deg);
  }

  pc-salutation > ::placeholder {
    color: black;
    opacity: 1;
  }

  pc-valediction > p:nth-of-type(1) {
    font-family: 'Great Vibes';
    margin: 0;
    padding: 0;
  }

  pc-valediction > p:nth-of-type(2) {
    margin: 0 0 0 0.25em;
    font-family: 'La Belle Aurore';
    font-size: 1.3em;
    transform: rotate(-1deg);
  }

  pc-control-buttons > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: none;
    float: right;
  }

  pc-control-buttons > a > i {
    color: black;
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
  <link
    rel="stylesheet"
    id="font-awesome-css"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
    type="text/css"
    media="all"
  />
</svelte:head>

<pc-panel>
  <pc-stamp>
    <p>Place Stamp Here</p>
    <img
      alt="Stamp of Marcus Aurelius"
      src="https://res.cloudinary.com/learningsvelte/image/upload/c_thumb,w_60,g_face/v1595559461/learningsvelte/projects/random_quote_machine/Marcus.png"
    />
    <img
      alt="Stamp Cancelation Mark"
      src="https://res.cloudinary.com/learningsvelte/image/upload/v1595561153/learningsvelte/projects/random_quote_machine/cancel.png"
    />
  </pc-stamp>
  <pc-salutation>
    <p>to:</p>
    <input placeholder="Enter Your Name Here" />
  </pc-salutation>
  <pc-valediction>
    <p>from:</p>
    <p id="author">{currentAuthor}</p>
  </pc-valediction>
  <pc-control-buttons>
    <button id="new-quote" on:click={newQuote}>
      <i class="fa fa-share fa-2x" aria-hidden="true" />
    </button>
    <a href={twitterUrl} id="tweet-quote">
      <i class="fa fa-twitter fa-2x" aria-hidden="true" />
    </a>
  </pc-control-buttons>
</pc-panel>
