<script>
  export let displayText;
</script>

<style>
  p {
    padding: 0;
    margin: 0;
    width: 320px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border: 3px solid black;
    border-bottom: none;
    box-sizing: border-box;
  }
</style>

<p id="display">{displayText}</p>
