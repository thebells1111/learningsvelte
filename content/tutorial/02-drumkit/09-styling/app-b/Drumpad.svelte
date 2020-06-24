<script>
  export let pad;
  export let playSound;
  export let key; 
</script>



<style>
  button {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 0;
    font-weight: 700;
  }

  .active, button:active{
    background-color: black;
    color: white
  }
</style>

<div>
  <button
    id={pad.displayText}
    class="drum-pad"
    on:click={() => playSound(pad)}
    class:active={key === pad.id}
  >
    <audio
      bind:this={pad.audioElement}
      id={pad.id}
      class="clip"
      src={pad.soundUrl}
    />
    {pad.id}
  </button>
</div>
