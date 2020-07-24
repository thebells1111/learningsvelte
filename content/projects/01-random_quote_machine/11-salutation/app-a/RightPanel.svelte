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

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: none;
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
</style>

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
  <pc-salutation />
  <pc-valediction>
    <p id="author">{currentAuthor}</p>
  </pc-valediction>
  <pc-control-buttons>
    <button id="new-quote" on:click={newQuote}>New Quote</button>
    <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
  </pc-control-buttons>
</pc-panel>
