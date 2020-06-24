<script>
  import Drumpad from './Drumpad.svelte';
  import Display from './Display.svelte';
  let displayText = '';
  let key;
  const drumPads = [
    {
      id: 'Q',
      soundUrl: 'tutorial/drumkit/sounds/ride.wav',
      displayText: 'ride',
      audioElement: undefined,
    },
    {
      id: 'W',
      soundUrl: 'tutorial/drumkit/sounds/snare.wav',
      displayText: 'snare',
      audioElement: undefined,
    },
    {
      id: 'E',
      soundUrl: 'tutorial/drumkit/sounds/boom.wav',
      displayText: 'boom',
      audioElement: undefined,
    },
    {
      id: 'A',
      soundUrl: 'tutorial/drumkit/sounds/clap.wav',
      displayText: 'clap',
      audioElement: undefined,
    },
    {
      id: 'S',
      soundUrl: 'tutorial/drumkit/sounds/hihat.wav',
      displayText: 'hihat',
      audioElement: undefined,
    },
    {
      id: 'D',
      soundUrl: 'tutorial/drumkit/sounds/kick.wav',
      displayText: 'kick',
      audioElement: undefined,
    },
    {
      id: 'Z',
      soundUrl: 'tutorial/drumkit/sounds/openhat.wav',
      displayText: 'openhat',
      audioElement: undefined,
    },
    {
      id: 'X',
      soundUrl: 'tutorial/drumkit/sounds/tink.wav',
      displayText: 'tink',
      audioElement: undefined,
    },
    {
      id: 'C',
      soundUrl: 'tutorial/drumkit/sounds/tom.wav',
      displayText: 'tom',
      audioElement: undefined,
    },
  ];

  function playSound(pad) {
    const sound = pad.audioElement;
    sound.currentTime = 0;
    sound.play();
    displayText = pad.displayText;
    //setTimeout(() => (displayText = ''), sound.duration * 1000);
    document.getElementById('display').innerText = displayText;
    setTimeout(
      () => (document.getElementById('display').innerText = ''),
      sound.duration * 1000
    );
  }

  function handleKeydown(e) {
    key = e.key.toUpperCase();
    const triggerKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    const index = triggerKeys.indexOf(key);
    if (index > -1) {
      playSound(drumPads[index]);
    }
  }
</script>

<style>
  .drum-pads {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 320px;
    height: 320px;
    border: 1px solid black;
    box-sizing: border-box;
  }
</style>

<svelte:window
  on:keydown={handleKeydown}
  on:keyup={() => (key = '')}
/>
<div id="drum-machine">
  <Display {displayText} />
  <div class="drum-pads">
    {#each drumPads as pad, index}
      <Drumpad {pad} {playSound} {key} />
    {/each}
  </div>
</div>
