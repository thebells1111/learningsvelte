<script>
  export let pad;
  export let playSound;
</script>

<div>
  <button id={pad.displayText} class="drum-pad" on:click={playSound}>
    <audio
      bind:this={pad.audioElement}
      id={pad.id}
      class="clip"
      src={pad.soundUrl}
    />
    {pad.id}
  </button>
  <p>{pad.displayText}</p>
</div>
