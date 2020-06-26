<script>
  export let displayText;
</script>

<style>
  p {
    width: 320px;
    height: 40px;
    border: 2px solid black;
    margin: 0;
    border-bottom: none;
    box-sizing: border-box;
    display: grid;
    place-items: center center;
    font-weight: 700;
  }
</style>

<p id="display">{displayText}</p>
