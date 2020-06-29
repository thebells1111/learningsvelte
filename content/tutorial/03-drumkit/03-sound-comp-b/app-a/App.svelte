<script>
  let sound;

  function playSound() {
    sound.currentTime = 0;
    sound.play();
  }
</script>

<button on:click={playSound}>
  <audio bind:this={sound} src="tutorial\drumkit\sounds\ride.wav" />
  button
</button>
