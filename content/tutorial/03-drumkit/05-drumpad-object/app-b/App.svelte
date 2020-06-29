<script>
  import Drumpad from './Drumpad.svelte';
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

  function playSound() {
    const sound = pad.audioElement;
    sound.currentTime = 0;
    sound.play();
  }
</script>

<Drumpad {pad} {playSound} />
