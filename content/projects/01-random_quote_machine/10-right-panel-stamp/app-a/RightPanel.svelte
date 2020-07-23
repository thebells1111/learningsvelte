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
  }

  pc-stamp,
  pc-salutation,
  pc-valediction {
    height: 25%;
    display: block;
  }
  pc-valediction {
    height: 40%;
  }

  pc-control-buttons {
    display: block;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: none;
  }
</style>

<pc-panel>
  <pc-stamp />
  <pc-salutation />
  <pc-valediction>
    <p id="author">{currentAuthor}</p>
  </pc-valediction>
  <pc-control-buttons>
    <button id="new-quote" on:click={newQuote}>New Quote</button>
    <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
  </pc-control-buttons>
</pc-panel>
