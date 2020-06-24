<script>
  import Drumpad from './Drumpad.svelte';
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

<Drumpad {pad} {playSound} />
