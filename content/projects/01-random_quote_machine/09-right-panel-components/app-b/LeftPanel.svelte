<script>
  export let currentText;
</script>

<style>
  div {
    box-sizing: border-box;
    width: 50%;
    border-right: 1px solid black;
  }

  p {
    margin: 0;
    font-size: 1.2em;
    line-height: 1.2em;
    padding: 0.5rem 1rem 0 1rem;
    transform: rotate(-3deg);
    font-family: 'La Belle Aurore';
  }

  .small-text {
    font-size: 1em;
  }
</style>

<div>
  <p id="text" class:small-text={currentText.length > 250}>
    {currentText}
  </p>
</div>
