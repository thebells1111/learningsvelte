<script>
  export let currentAuthor;
  export let newQuote;
  export let twitterUrl;
  let name;
</script>

<style>
  panel {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 0 0 0 1em;
    font-family: 'Great Vibes';
  }
  p {
    margin: 0;
    padding: 0;
  }

  stamp,
  salutation {
    height: 25%;
    display: block;
  }
  valediction {
    height: 40%;
    display: block;
  }

  control-buttons {
    display: block;
  }

  stamp > p {
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

  author {
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

  author {
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
</style>

<panel type="right">
  <stamp>
    <p>Place Stamp Here</p>
  </stamp>
  <salutation>
    <p>to:</p>
    <input bind:value={name} placeholder="Enter Your Name Here" />
  </salutation>
  <valediction>
    <p>from:</p>
    <author
      id="author"
      class="author"
      class:small={currentAuthor.length > 20}
      class:smaller={currentAuthor.length > 24}
    >
      {currentAuthor}
    </author>
  </valediction>
  <control-buttons>
    <a href={twitterUrl} id="tweet-quote">
      <i class="fa fa-twitter fa-2x" aria-hidden="true" />
    </a>
    <button id="new-quote" on:click={newQuote}>
      <i class="fa fa-share fa-2x" aria-hidden="true" />
    </button>
  </control-buttons>
</panel>
