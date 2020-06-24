<script>
  let pad = {
    id: 'Q',
    soundUrl: 'tutorial/drumkit/sounds/ride.wav',
    displayText: 'ride',
    audioElement: undefined,
  };

  function playSound() {
    const sound = pad.audioElement;
    sound.currentTime = 0;
    sound.play();
  }
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
