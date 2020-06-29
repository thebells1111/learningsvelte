---
title: Create All Drumpad objects
---
So this will work if we want to play only one sound, but if we want to play multiple sounds, we need multiple `pad` objects. In fact, we'll create an array of them called `drumPads`.

Inside of `App.svelte`, create a new array named `drumPads`, and populate it with nine pad objects that are similar to the original `pad` objects. Then, delete the original `pad` object. Each object will have a unique `id`, `soundUrl`, and `displayText`. 

You can type in everything you see, below, or just hit `Autocomplete Code` to have it done automatically. You'll notice the `id` matches the required keys required of User Story #3 and #4.

```js
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
```